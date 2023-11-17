import { Otp, User } from '@BackEnd/models';
import slugify from 'slugify';
import { zfd } from 'zod-form-data';
import * as z from 'zod';
import { NextResponse } from 'next/server';
import { ApiHandler, ResponseMessages, SmsService } from '@BackEnd/lib';
import {
  ControllerBase,
  ControllerBaseRequest,
  OtpType,
  UserDynamicParam,
  UserType,
} from '@BackEnd/types'; // Create Controller Object
import crypto from 'crypto';

// Create Controller Object
export const UserController: ControllerBase<UserDynamicParam> = {
  create: UserControllerCreate,
  update: UserControllerUpdate,
  getAll: UserControllerGetAll,
  find: UserControllerFind,
  delete: UserControllerDelete,
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
    birthdate: z.date().optional(),
  })
);
const updateSchema = zfd.formData(
  z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().optional(),
    phoneNumber: z.string().optional(),
    password: z.string().optional(),
    isActive: z.string().optional(),
    nickname: z.string().optional(),
    birthdate: z.date().optional(),
  })
);

// User Creator
async function UserControllerCreate(req: ControllerBaseRequest): Promise<NextResponse> {
  return await ApiHandler<UserType>(
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
            return {
              data: updateUser,
              message: ResponseMessages.CreateNewUser,
            };
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
        const otp: number = crypto.randomInt(100000, 999999);
        const result: UserType = await User.create<UserType>({
          ...body,
          username: slugify(body.username || body.firstName + body.lastName, {
            lower: true,
            remove: /[*+~.()'"!:@]/g,
          }),
          isActive: false,
        });
        await Otp.create({
          user: result._id,
          code: otp,
          expireAt: new Date(Date.now() + 180 * 1000),
        });
        const smsService = new SmsService();
        await smsService.OtpSend({
          template: 'DevelopTerxineResturant',
          receptor: result.phoneNumber,
          checkid: '1',
          type: '1',
          param1: String(otp),
        });
        return {
          data: result,
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
  return await ApiHandler<UserType>(
    async body => {
      const result: UserType | null = await User.findOne({ _id: params._id });
      if (result) {
        const update = await User.findOneAndUpdate<UserType>(
          { _id: params._id },
          {
            $set: {
              ...body,
              slug: slugify(body.slug, { lower: true, remove: /[*+~.()'"!:@]/g }),
            },
          },
          { new: true }
        );
        return {
          data: update,
          message: ResponseMessages.UpdateUserById,
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
      schema: updateSchema,
      errorMessage: undefined,
      hasBody: true,
    }
  );
}

// Get All User
async function UserControllerGetAll(req: ControllerBaseRequest): Promise<NextResponse> {
  return await ApiHandler<UserType[]>(
    async () => {
      const results: UserType[] = await User.find();
      if (results.length > 0) {
        return {
          data: results,
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

// Find by id branch
async function UserControllerFind(
  req: ControllerBaseRequest,
  { params }: UserDynamicParam
): Promise<NextResponse> {
  return await ApiHandler<UserType>(
    async () => {
      const result: UserType | null = await User.findOne({ _id: params._id });
      if (result) {
        return {
          data: result,
          message: ResponseMessages.FindUser,
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

// Delete by id branch
async function UserControllerDelete(
  req: ControllerBaseRequest,
  { params }: UserDynamicParam
): Promise<NextResponse> {
  return await ApiHandler<UserType>(
    async () => {
      const result = await User.findOne({ _id: params._id });
      if (result) {
        await User.deleteOne({ _id: params._id });
        return {
          message: ResponseMessages.DeleteUser,
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
