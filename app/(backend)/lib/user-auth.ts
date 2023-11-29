import { ControllerBaseRequest, ControllerJsonBody, OtpType, UserType } from '@BackEnd/types';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { Token, TokenVerifyReturn } from '@BackEnd/lib/jwt';
import { ResponseMessages } from '@BackEnd/lib/messages.enum';
import { TrimUser, TrimUserType } from '@BackEnd/lib/trim-user-data';
import { Otp, User } from '@BackEnd/models';
import { passCheck } from '@BackEnd/lib/password';
import { SmsService } from '@BackEnd/lib/sms-config';
import { Config } from '@BackEnd/lib/config';
import ms from 'ms';

export class UserAuth {
  /**
   *
   * @private {ControllerBaseRequest} - request api parameters
   */
  private requesrt: ControllerBaseRequest;

  constructor(req: ControllerBaseRequest) {
    this.requesrt = req;
  }

  checkCookie(): RequestCookie | null {
    const cookie = this.requesrt.cookies.get('_terxineAccessToken');
    if (!!cookie) {
      return cookie;
    }
    return null;
  }

  checkAccessToken(): TokenVerifyReturn<TrimUserType> {
    const cookie: RequestCookie | null = this.checkCookie();
    if (!!cookie && !!cookie?.value) {
      return Token.Verify(cookie.value);
    }
    return {
      isValid: false,
      errorMessage: ResponseMessages.TokenIsNotAvailable,
      decoded: null,
    };
  }

  async verify(
    password: string,
    username?: string,
    email?: string
  ): Promise<ControllerJsonBody<TrimUserType>> {
    let searchObj: Partial<UserType> = {};

    if (username) {
      searchObj.username = username;
    }
    if (email) {
      searchObj.email = email;
    }

    try {
      const user: UserType | null = await User.findOne(searchObj);

      if (user) {
        const isValid = await passCheck(password, user.password);

        if (isValid) {
          return {
            data: TrimUser(user),
            message: ResponseMessages.LoginUserIsValid,
            cookies: await Token.CreateAndSetCookie(TrimUser(user)),
          };
        } else {
          return {
            message: ResponseMessages.UsernameOrPasswordIsInValid,
            status: 400,
          };
        }
      }

      return {
        message: ResponseMessages.NotFoundUser,
        status: 404,
      };
    } catch (err: any) {
      return {
        errors: [err],
        message: ResponseMessages.NotFoundUser,
        status: 401,
      };
    }
  }

  async verifyOtp(phoneNumber: string, code?: string): Promise<ControllerJsonBody<TrimUserType>> {
    const findUser: UserType | null = await User.findOne({ phoneNumber: phoneNumber });
    if (findUser) {
      if (!code) {
        const smsService = new SmsService();

        await Otp.create({
          user: findUser._id,
          code: smsService.OtpGenerator(Config.OTP.LENGTH),
          expireAt: new Date(Date.now() + ms('2 m')),
        });

        await smsService.OtpSend({
          template: Config.OTP.TEMPLATE.SmsOtp,
          receptor: phoneNumber,
          checkid: '1',
          type: '1',
          param1: String(smsService.OtpGenerator(Config.OTP.LENGTH)),
        });
        return {
          data: TrimUser(findUser),
          message: ResponseMessages.SendOtpCode,
        };
      } else {
        const getOtp: OtpType | null = await Otp.findOne({
          user: findUser._id,
        });
        if (getOtp?.code === code) {
          return {
            data: TrimUser(findUser),
            message: ResponseMessages.LoginUserIsValid,
            cookies: await Token.CreateAndSetCookie(TrimUser(findUser)),
          };
        }
      }
    }
    return {
      data: null,
      message: ResponseMessages.NotFoundUser,
      status: 404,
    };
  }
}
