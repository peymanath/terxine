import { ControllerBaseRequest, FoodDynamicParam } from '@BackEnd/types';
import { NextResponse } from 'next/server';
import { FoodController } from '@BackEnd/controller';

export async function DELETE(
  req: ControllerBaseRequest,
  params: FoodDynamicParam
): Promise<NextResponse> {
  return await FoodController.delete(req, params);
}

export async function GET(
  req: ControllerBaseRequest,
  params: FoodDynamicParam
): Promise<NextResponse> {
  return await FoodController.find(req, params);
}

export async function PUT(
  req: ControllerBaseRequest,
  params: FoodDynamicParam
): Promise<NextResponse> {
  return await FoodController.update(req, params);
}
