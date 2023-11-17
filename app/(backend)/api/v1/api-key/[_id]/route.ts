import { NextResponse } from 'next/server';
import { ApiKeyController } from '@BackEnd/controller';
import { ApiKeyDynamicParam, ControllerBaseRequest } from '@BackEnd/types';

export async function DELETE(
  req: ControllerBaseRequest,
  param: ApiKeyDynamicParam
): Promise<NextResponse> {
  return await ApiKeyController.delete(req, param);
}
