import { NextResponse } from 'next/server';
import { FoodController } from '@BackEnd/controller/food.controller';

export async function POST(req: Request): Promise<NextResponse> {
  return await FoodController.create(req);
}

export async function GET(req: Request): Promise<NextResponse> {
  return await FoodController.getAll(req);
}
