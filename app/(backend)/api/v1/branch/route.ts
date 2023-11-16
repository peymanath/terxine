import { NextResponse } from 'next/server';
import { BranchController } from '@BackEnd/controller';
import { ControllerBaseRequest } from '@BackEnd/types';

export async function POST(req: ControllerBaseRequest): Promise<NextResponse> {
  return await BranchController.create(req);
}

export async function GET(req: ControllerBaseRequest): Promise<NextResponse> {
  return await BranchController.getAll(req);
}
