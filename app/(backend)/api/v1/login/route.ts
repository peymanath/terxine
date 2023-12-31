import { ControllerBaseRequest } from '@BackEnd/types';
import { SmsController } from '@BackEnd/controller/sms.controller';
import { NextResponse } from 'next/server';

export async function POST(req: ControllerBaseRequest): Promise<NextResponse> {
  return await SmsController.sendOtp(req);
}
