import { ControllerBaseRequest, UserDynamicParam } from '@BackEnd/types';
import { NextResponse } from 'next/server';
import { UserController } from '@BackEnd/controller/user.controller';

export async function POST(
  req: ControllerBaseRequest,
  params: UserDynamicParam
): Promise<NextResponse> {
  return await UserController.update(req, params);
}
