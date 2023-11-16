import { NextResponse } from 'next/server';
import { FoodController } from '@BackEnd/controller';
import { ControllerBaseRequest, FoodDynamicParam } from '@BackEnd/types';

export async function GET(
  req: ControllerBaseRequest,
  params: FoodDynamicParam
): Promise<NextResponse> {
  return await FoodController.byBranch(req, params);
}
