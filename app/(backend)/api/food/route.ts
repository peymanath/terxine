import { zfd } from 'zod-form-data';
import * as z from 'zod';
import { NextResponse } from 'next/server';
import { FoodType } from '@BackEnd/types';
import { apiResponse, dbConnect } from '@BackEnd/lib';
import slugify from 'slugify';
import { ErrorHandler } from '@BackEnd/lib/error-handler';
import { Food } from '@BackEnd/models/food.model';
import { Branch } from '@BackEnd/models';

const schema = zfd.formData(
  z.object({
    name: z.string(),
    slug: z.string().optional(),
    ingredient: z.string().array(),
    minPrice: z.number(),
    fromPrice: z.number().optional(),
    perssentage: z.number().optional(),
    rating: z.string().array().optional(),
    wishList: z.string().array().optional(),
    branches: z.string().array(),
  })
);

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const {
      name,
      slug,
      branches,
      ingredient,
      minPrice,
      perssentage,
      fromPrice,
      wishList,
      rating,
    }: FoodType = schema.parse(await req.json());
    await dbConnect();

    // Does it check whether the branches exist or not? //
    try {
      for (const branchId of branches) {
        await Branch.findOne({ _id: branchId }).exec();
      }
    } catch {
      return apiResponse<FoodType>({
        data: null,
        errors: [],
        message: 'One or more branches were not found',
        status: 400,
      });
    }

    // Food Is Created
    const createFood = await Food.create<FoodType>({
      name,
      slug: slugify(slug || name, { lower: true, remove: /[*+~.()'"!:@]/g }),
      branches,
      ingredient,
      minPrice,
      fromPrice,
      perssentage,
      wishList,
      rating,
    });

    // Add foods to branches
    for (const branchId of branches) {
      const branch = await Branch.findOne({ _id: branchId }).exec();
      if (!branch.foods.includes(createFood._id)) {
        branch.foods.push(createFood._id);
        await branch.save();
      }
    }

    // Return Success message
    return apiResponse<FoodType>({
      data: createFood,
      message: 'The Food was created successfully.',
    });
  } catch (err: Error | unknown) {
    return new ErrorHandler(err).createError<FoodType>();
  }
}
