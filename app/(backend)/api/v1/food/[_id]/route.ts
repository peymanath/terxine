import { FoodDynamicParam, FoodType } from '@BackEnd/types';
import { NextResponse } from 'next/server';
import { apiResponse, dbConnect } from '@BackEnd/lib';
import { Food } from '@BackEnd/models';
import { ErrorHandler } from '@BackEnd/lib/error-handler';

export async function DELETE(
  _req: Request,
  { params: { _id } }: FoodDynamicParam
): Promise<NextResponse> {
  try {
    await dbConnect();
    await Food.deleteOne({ _id });
    return apiResponse<FoodType>({
      data: null,
      message: 'The branch was successfully deleted.',
    });
  } catch (err: Error | unknown) {
    return new ErrorHandler(err).createError<FoodType>();
  }
}

export async function GET(
  _req: Request,
  { params: { _id } }: FoodDynamicParam
): Promise<NextResponse> {
  try {
    await dbConnect();
    const findFoodById = await Food.findOne({ _id });
    return apiResponse<FoodType>({
      data: findFoodById,
      message: 'A Food was found',
    });
  } catch (err: Error | unknown) {
    return new ErrorHandler(err).createError<FoodType>();
  }
}
