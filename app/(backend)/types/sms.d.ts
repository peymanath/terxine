import { NextResponse } from 'next/server';
import { ControllerBaseRequest } from '@BackEnd/types/global';
import { ObjectId } from 'mongoose';

export type SmsOtpSendOption = {
  template: string;
  receptor: string;
  checkid: string;
  type: '1' | '2';
  param1: string;
  param2?: string;
  param3?: string;
  param4?: string;
  param5?: string;
  param6?: string;
  param7?: string;
  param8?: string;
  param9?: string;
  param10?: string;
};
export type SmsOtpSendOptionResponse = {
  result: {
    code: number;
    message: string;
  };
  items: number[];
};
export type SmsControllerType = {
  sendOtp: (_option: ControllerBaseRequest) => Promise<NextResponse>;
};

export type OtpType = {
  _id?: ObjectId;
  user: ObjectId;
  code: string;
  expireAt: Date;
};
