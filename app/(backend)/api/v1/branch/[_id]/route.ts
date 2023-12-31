import { BranchDynamicParam, ControllerBaseRequest } from '@BackEnd/types';
import { NextResponse } from 'next/server';
import { BranchController } from '@BackEnd/controller';

export async function PUT(
  req: ControllerBaseRequest,
  param: BranchDynamicParam
): Promise<NextResponse> {
  return await BranchController.update(req, param);
}

export async function DELETE(
  req: ControllerBaseRequest,
  param: BranchDynamicParam
): Promise<NextResponse> {
  return await BranchController.delete(req, param);
}

export async function GET(
  req: ControllerBaseRequest,
  param: BranchDynamicParam
): Promise<NextResponse> {
  return await BranchController.find(req, param);
}
