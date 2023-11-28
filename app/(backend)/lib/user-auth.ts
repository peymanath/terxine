import { ControllerBaseRequest, ControllerJsonBody, UserType } from '@BackEnd/types';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { Token, TokenVerifyReturn } from '@BackEnd/lib/jwt';
import { ResponseMessages } from '@BackEnd/lib/messages.enum';
import { TrimUser, TrimUserType } from '@BackEnd/lib/trim-user-data';
import { User } from '@BackEnd/models';
import { passCheck } from '@BackEnd/lib/password';

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
            status: 200,
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
}
