import { ControllerBaseRequest } from '@BackEnd/types';
import { NextResponse } from 'next/server';
import { UserController } from '@BackEnd/controller/user.controller';

export async function POST(req: ControllerBaseRequest): Promise<NextResponse> {
  return await UserController.create(req);
}
