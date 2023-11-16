import { NextRequest, NextResponse } from 'next/server';
import { FoodController } from '@BackEnd/controller';
import { FoodDynamicParam } from '@BackEnd/types';

export async function GET(req: NextRequest, params: FoodDynamicParam): Promise<NextResponse> {
  return await FoodController.byBranch(req, params);
}
