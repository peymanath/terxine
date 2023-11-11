import { NextRequest, NextResponse } from 'next/server';
import { FoodType } from '@BackEnd/types';
import { apiResponse, dbConnect } from '@BackEnd/lib';
import { ErrorHandler } from '@BackEnd/lib/error-handler';
import { Branch } from '@BackEnd/models';
import { Food } from '@BackEnd/models/food.model';

export async function GET(req: NextRequest): Promise<NextResponse> {
  const branchId: string | null = req.nextUrl.searchParams.get('branchId');
  if (!branchId) {
    return apiResponse<FoodType>({
      data: null,
      errors: ['branchId is empty'],
      message: 'Please send branchId parameter',
      status: 400,
    });
  }
  try {
    await dbConnect();
    const branch = await Branch.findOne({ _id: branchId }).exec();

    if (!branch) {
      return apiResponse<FoodType>({
        data: null,
        errors: ['Branch Not Found'],
        message: 'Branch Not Found',
        status: 403,
      });
    }
    const findFoods = await Food.find({ branches: branch._id }).exec();
    console.log(findFoods);
    return apiResponse<FoodType[]>({
      data: findFoods,
      message: 'The Food was created successfully.',
    });
  } catch (err: Error | unknown) {
    return new ErrorHandler(err).createError<FoodType>();
  }
}
