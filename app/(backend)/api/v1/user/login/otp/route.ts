import { UserController } from '@BackEnd/controller/user.controller';
import { ControllerBaseRequest } from '@BackEnd/types';
import { NextResponse } from 'next/server';

export async function POST(req: ControllerBaseRequest): Promise<NextResponse> {
  return await UserController.otpLogin(req);
}
