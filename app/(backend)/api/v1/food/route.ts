import { NextResponse } from 'next/server';
import { FoodController } from '@BackEnd/controller/food.controller';
import { ControllerBaseRequest } from '@BackEnd/types';

export async function POST(req: ControllerBaseRequest): Promise<NextResponse> {
  return await FoodController.create(req);
}

export async function GET(req: ControllerBaseRequest): Promise<NextResponse> {
  return await FoodController.getAll(req);
}
