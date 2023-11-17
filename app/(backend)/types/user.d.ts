import { ObjectId } from 'mongoose';

export interface UserType {
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
}

export interface UserDynamicParam {
  params: { _id: ObjectId };
}
