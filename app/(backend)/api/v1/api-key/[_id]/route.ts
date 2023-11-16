import { NextResponse } from 'next/server';
import { ApiKeyController } from '@BackEnd/controller';
import { ApiKeyDynamicParam } from '@BackEnd/types';

export async function DELETE(req: Request, param: ApiKeyDynamicParam): Promise<NextResponse> {
  return await ApiKeyController.delete(req, param);
}

export async function GET(req: Request, param: ApiKeyDynamicParam): Promise<NextResponse> {
  return await ApiKeyController.validate(req, param);
}
