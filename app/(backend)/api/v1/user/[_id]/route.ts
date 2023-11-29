import { ControllerBaseRequest, UserDynamicParam } from '@BackEnd/types';
import { NextResponse } from 'next/server';
import { UserController } from '@BackEnd/controller/user.controller';

export async function GET(
  req: ControllerBaseRequest,
  params: UserDynamicParam
): Promise<NextResponse> {
  return await UserController.find(req, params);
}

export async function PUT(
  req: ControllerBaseRequest,
  params: UserDynamicParam
): Promise<NextResponse> {
  return await UserController.update(req, params);
}

export async function DELETE(
  req: ControllerBaseRequest,
  params: UserDynamicParam
): Promise<NextResponse> {
  return await UserController.delete(req, params);
}
