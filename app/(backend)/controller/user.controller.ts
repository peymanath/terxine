import { Otp, User } from '@BackEnd/models';
import slugify from 'slugify';
import { zfd } from 'zod-form-data';
import * as z from 'zod';
import { NextResponse } from 'next/server';
import { ApiHandler, Config, ResponseMessages, SmsService, Token } from '@BackEnd/lib';
import { passCheck, passHash } from '@BackEnd/lib/password';
import ms from 'ms';
import {
  ControllerBase,
  ControllerBaseRequest,
  OtpType,
  UserControllerType,
  UserDeleteBodyType,
  UserDynamicParam,
  UserLoginOtpBodyType,
  UserLoginPasswordBodyType,
  UserType,
} from '@BackEnd/types';
import { TrimUser, TrimUserType } from '@BackEnd/lib/trim-user-data';
import { UserAuth } from '@BackEnd/lib/user-auth'; // Create Controller Object

// Create Controller Object
export const UserController: ControllerBase<UserDynamicParam> & UserControllerType = {
  create: UserControllerRegister,
  update: UserControllerUpdate,
  getAll: UserControllerGetAll,
  find: UserControllerFind,
  delete: UserControllerDelete,
  passwordLogin: UserControllerPasswordLogin,
  otpLogin: UserControllerOtpLogin,
};

// Schema Data Model
const createSchema = zfd.formData(
  z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    phoneNumber: z.string(),
    code: z.string().optional(),
    password: z.string().optional(),
    username: z.string().optional(),
    isActive: z.string().optional(),
    nickname: z.string().optional(),
    birthdate: z
      .string()
      .transform(str => new Date(str))
      .optional(),
  })
);
const updateSchema = zfd.formData(
  z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().optional(),
    nickname: z.string().optional(),
    birthdate: z
      .string()
      .transform(str => new Date(str))
      .optional(),
  })
);
const loginPasswordSchema = zfd.formData(
  z.object({
    email: z.string().optional(),
    username: z.string().optional(),
    password: z.string(),
  })
);
const loginOtpSchema = zfd.formData(
  z.object({
    phoneNumber: z.string(),
    code: z.string().optional(),
  })
);
const deleteSchema = zfd.formData(
  z.object({
    phoneNumber: z.string(),
    password: z.string(),
    email: z.string(),
  })
);

// User Creator
async function UserControllerRegister(req: ControllerBaseRequest): Promise<NextResponse> {
  return await ApiHandler<Omit<UserType, 'password' | 'isActive' | 'code' | 'token'>>(
    async body => {
      const findUser: UserType | null = await User.findOne({
        email: body.email,
        username: body.username,
      });
      if (!!findUser) {
        const getOtp: OtpType | null = await Otp.findOne({
          user: findUser._id,
        });
        if (!findUser.isActive) {
          if (getOtp?.code === body.code) {
            const updateUser: UserType | null = await User.findOneAndUpdate(
              {
                _id: findUser._id,
              },
              {
                $set: {
                  isActive: true,
                },
              },
              { new: true }
            );
            await Otp.deleteOne({
              user: findUser._id,
              code: getOtp?.code,
            });

            if (!!updateUser) {
              return {
                data: TrimUser(updateUser),
                message: ResponseMessages.CreateNewUser,
                cookies: await Token.CreateAndSetCookie(TrimUser(updateUser)),
              };
            } else {
              await User.deleteOne({
                user: findUser._id,
              });
              return {
                message: ResponseMessages.CreateNewUserFailed,
                status: 500,
              };
            }
          } else {
            return {
              message: ResponseMessages.CodeNotAvailable,
              status: 400,
            };
          }
        } else {
          return {
            message: ResponseMessages.ExistFoundUser,
            status: 400,
          };
        }
      } else {
        const smsService = new SmsService();
        const password = body.password ? await passHash(body.password) : null;
        const result: UserType = await User.create<UserType>({
          ...body,
          username: slugify(body.username || body.firstName + body.lastName, {
            lower: true,
            remove: /[*+~.()'"!:@]/g,
          }),
          password,
          isActive: false,
        });
        await Otp.create({
          user: result._id,
          code: smsService.OtpGenerator(Config.OTP.LENGTH),
          expireAt: new Date(Date.now() + ms('2 m')),
        });

        await smsService.OtpSend({
          template: Config.OTP.TEMPLATE.SmsOtp,
          receptor: result.phoneNumber,
          checkid: '1',
          type: '1',
          param1: String(smsService.OtpGenerator(Config.OTP.LENGTH)),
        });
        return {
          data: TrimUser(result),
          message: ResponseMessages.SendOtpCode,
        };
      }
    },
    {
      req,
      schema: createSchema,
      errorMessage: undefined,
      hasBody: true,
    }
  );
}

// User Update
async function UserControllerUpdate(
  req: ControllerBaseRequest,
  { params }: UserDynamicParam
): Promise<NextResponse> {
  return await ApiHandler<Partial<TrimUserType>>(
    async body => {
      const result: UserType | null = await User.findOneAndUpdate<UserType>(
        { _id: params._id },
        {
          $set: {
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            nickname: body.nickname,
            birthdate: body.birthdate,
          },
        },
        { new: true }
      );
      if (result) {
        return {
          data: TrimUser(result),
          message: ResponseMessages.UpdateUserById,
          cookies: await Token.CreateAndSetCookie(TrimUser(result)),
        };
      }
      return {
        message: ResponseMessages.NotFoundUser,
        status: 404,
      };
    },
    {
      req,
      schema: updateSchema,
      errorMessage: undefined,
      hasBody: true,
    }
  );
}

// Get All User
async function UserControllerGetAll(req: ControllerBaseRequest): Promise<NextResponse> {
  return await ApiHandler<TrimUserType[]>(
    async () => {
      const results: UserType[] = await User.find();
      if (results.length > 0) {
        const trimUsers: TrimUserType[] = results.map(item => {
          return TrimUser(item);
        });
        return {
          data: trimUsers,
          message: ResponseMessages.GetAllUser,
        };
      } else {
        return {
          message: ResponseMessages.NotFoundUser,
          status: 404,
        };
      }
    },
    {
      req,
      schema: createSchema,
      errorMessage: ResponseMessages.Error,
    }
  );
}

// Find by ID
async function UserControllerFind(
  req: ControllerBaseRequest,
  { params }: UserDynamicParam
): Promise<NextResponse> {
  return await ApiHandler<TrimUserType>(
    async () => {
      const result: UserType | null = await User.findOne({ _id: params._id });
      if (result) {
        return {
          data: TrimUser(result),
          message: ResponseMessages.FindUser,
        };
      }
      return {
        message: ResponseMessages.NotFoundUser,
        status: 404,
      };
    },
    {
      req,
      schema: createSchema,
      errorMessage: ResponseMessages.Error,
    }
  );
}

// Delete by ID
async function UserControllerDelete(
  req: ControllerBaseRequest,
  { params }: UserDynamicParam
): Promise<NextResponse> {
  return await ApiHandler<null>(
    async (body: UserDeleteBodyType) => {
      const result: UserType | null = await User.findOne({ _id: params._id });
      if (result) {
        if (
          (await passCheck(body.password, result.password)) &&
          body.email === result.email &&
          body.phoneNumber === result.phoneNumber
        ) {
          await User.deleteOne({
            _id: params._id,
            email: result.email,
            phoneNumber: result.phoneNumber,
          });
          return {
            message: ResponseMessages.DeleteUser,
          };
        }
        return {
          message: ResponseMessages.DataIsInValid,
          status: 404,
        };
      }
      return {
        message: ResponseMessages.NotFoundUser,
        status: 404,
      };
    },
    {
      req,
      schema: deleteSchema,
      errorMessage: ResponseMessages.Error,
      hasBody: true,
    }
  );
}

// Login User With Password
async function UserControllerPasswordLogin(req: ControllerBaseRequest): Promise<NextResponse> {
  return await ApiHandler<any>(
    async (body: UserLoginPasswordBodyType) => {
      if (body.username || body.email) {
        const userAuth = new UserAuth(req);
        return await userAuth.verify(body.password, body.username, body.email);
      }
      return {
        data: null,
        message: ResponseMessages.PleaseEnterUsernameOrEmail,
        status: 400,
      };
    },
    {
      req,
      schema: loginPasswordSchema,
      errorMessage: ResponseMessages.Error,
      hasBody: true,
    }
  );
}

async function UserControllerOtpLogin(req: ControllerBaseRequest): Promise<NextResponse> {
  return await ApiHandler<any>(
    async (body: UserLoginOtpBodyType) => {
      if (body.phoneNumber) {
        const userAuth = new UserAuth(req);
        return await userAuth.verifyOtp(body.phoneNumber, body.code);
      }
      return {
        data: null,
        message: ResponseMessages.PleaseEnterPhoneNumber,
        status: 400,
      };
    },
    {
      req,
      schema: loginOtpSchema,
      errorMessage: ResponseMessages.Error,
      hasBody: true,
    }
  );
}
