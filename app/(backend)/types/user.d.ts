import { ObjectId } from 'mongoose';
import { ControllerBaseRequest } from '@BackEnd/types/global';
import { NextResponse } from 'next/server';

export type UserType = {
  _id?: ObjectId;
  firstName: string;
  lastName: string;
  nickname: string;
  email: string;
  username: string;
  password: string;
  code: string;
  phoneNumber: string;
  birthdate: Date;
  isActive: boolean;
  token: string | undefined;
};
export type UserLoginBodyType = {
  email?: string;
  username?: string;
  password: string;
};
export type UserControllerType = {
  login: (_req: ControllerBaseRequest) => Promise<NextResponse>;
};

export interface UserDynamicParam {
  params: { _id: ObjectId; email: string; username: string };
}
