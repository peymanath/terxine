import { NextResponse } from 'next/server';
import { BranchController } from '@BackEnd/controller';

export async function POST(req: Request): Promise<NextResponse> {
  return await BranchController.create(req);
}

export async function GET(req: Request): Promise<NextResponse> {
  return await BranchController.getAll(req);
}
