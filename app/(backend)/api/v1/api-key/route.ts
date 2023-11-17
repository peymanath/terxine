import { NextResponse } from 'next/server';
import { ApiKeyController } from '@BackEnd/controller';
import { ControllerBaseRequest } from '@BackEnd/types';

export async function POST(req: ControllerBaseRequest): Promise<NextResponse> {
  return await ApiKeyController.create(req);
}
