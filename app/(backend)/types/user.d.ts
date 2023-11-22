import { ObjectId } from 'mongoose';

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

export interface UserDynamicParam {
  params: { _id: ObjectId; email: string; username: string };
}
