import { NextResponse } from 'next/server';
import { ApiKeyController } from '@BackEnd/controller';

export async function POST(req: Request): Promise<NextResponse> {
  return await ApiKeyController.create(req);
}
