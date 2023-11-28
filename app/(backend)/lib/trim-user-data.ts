import { UserType } from '@BackEnd/types';
import { ObjectId } from 'mongoose';

export type TrimUserType = Pick<
  UserType,
  'firstName' | 'lastName' | 'phoneNumber' | 'email' | 'username' | 'nickname' | 'birthdate'
> & {
  id: ObjectId | undefined;
};

export const TrimUser = (userObj: UserType): TrimUserType => {
  return {
    id: userObj._id || undefined,
    firstName: userObj.firstName,
    lastName: userObj.lastName,
    phoneNumber: userObj.phoneNumber,
    email: userObj.email,
    username: userObj.username,
    nickname: userObj.nickname,
    birthdate: userObj.birthdate,
  };
};
