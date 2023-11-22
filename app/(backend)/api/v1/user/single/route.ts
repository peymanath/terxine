import { ControllerBaseRequest, UserDynamicParam } from '@BackEnd/types';
import { NextResponse } from 'next/server';
import { UserController } from '@BackEnd/controller/user.controller';

export async function GET(
  req: ControllerBaseRequest,
  params: UserDynamicParam
): Promise<NextResponse> {
  return await UserController.find(req, params);
}
