import { ControllerBase, FoodControllerType, FoodDynamicParam, FoodType } from '@BackEnd/types';
import { Branch, Food } from '@BackEnd/models';
import slugify from 'slugify';
import { zfd } from 'zod-form-data';
import * as z from 'zod';
import { NextResponse } from 'next/server';
import { ApiHandler, ResponseErrorMessages, ResponseSuccessMessages } from '@BackEnd/lib';

// Create Controller Object
export const FoodController: ControllerBase<FoodType, FoodDynamicParam> &
  FoodControllerType<FoodType, FoodDynamicParam> = {
  create: FoodControllerCreate,
  update: FoodControllerUpdate,
  getAll: FoodControllerGetAll,
  find: FoodControllerFind,
  delete: FoodControllerDelete,
  byBranch: FoodControllerFindByBranchId,
};

// Schema Data Model
const createSchema = zfd.formData(
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
const updateSchema = zfd.formData(
  z.object({
    name: z.string().optional(),
    slug: z.string().optional().optional(),
    ingredient: z.string().array().optional(),
    minPrice: z.number().optional(),
    fromPrice: z.number().optional(),
    perssentage: z.number().optional(),
    rating: z.string().array().optional(),
    wishList: z.string().array().optional(),
    branches: z.string().array().optional(),
  })
);

// Food Creator
async function FoodControllerCreate(req: Request): Promise<NextResponse> {
  return await ApiHandler<FoodType>(
    async body => {
      // Does it check whether the branches exist or not?
      try {
        for (const branchId of body.branches) {
          await Branch.findOne({ _id: branchId }).exec();
        }
        const result: FoodType = await Food.create<FoodType>({
          ...body,
          slug: slugify(body.slug || body.name, { lower: true, remove: /[*+~.()'"!:@]/g }),
        });
        for (const branchId of body.branches) {
          const branch = await Branch.findOne({ _id: branchId }).exec();
          if (!branch.foods.includes(result._id)) {
            branch.foods.push(result._id);
            await branch.save();
          }
        }
        return {
          data: result,
          message: ResponseSuccessMessages.CreateNewFood,
          status: 404,
        };
      } catch {
        return {
          message: ResponseErrorMessages.OneOrMoreBranchesNotFound,
          status: 400,
        };
      }
    },
    {
      req,
      schema: createSchema,
      errorMessage: undefined,
      hasBody: true,
    }
  );
}

// Food Update
async function FoodControllerUpdate(
  req: Request,
  { params }: FoodDynamicParam
): Promise<NextResponse> {
  return await ApiHandler<FoodType>(
    async body => {
      const result: FoodType | null = await Food.findOne({ _id: params._id });
      if (result) {
        const update = await Food.findOneAndUpdate<FoodType>(
          { _id: params._id },
          {
            $set: {
              ...body,
              slug: slugify(body.slug, { lower: true, remove: /[*+~.()'"!:@]/g }),
            },
          },
          { new: true }
        );
        return {
          data: update,
          message: ResponseSuccessMessages.UpdateFoodById,
        };
      } else {
        return {
          message: ResponseSuccessMessages.NotFoundFood,
          status: 404,
        };
      }
    },
    {
      req,
      schema: updateSchema,
      errorMessage: undefined,
      hasBody: true,
    }
  );
}

// Get All Food
async function FoodControllerGetAll(req: Request): Promise<NextResponse> {
  return await ApiHandler<FoodType[]>(
    async () => {
      const results: FoodType[] = await Food.find();
      if (results.length > 0) {
        return {
          data: results,
          message: ResponseSuccessMessages.GetAllFood,
        };
      } else {
        return {
          message: ResponseSuccessMessages.NotFoundFood,
          status: 404,
        };
      }
    },
    {
      req,
      schema: createSchema,
      errorMessage: ResponseErrorMessages.Error,
    }
  );
}

// Find by id branch
async function FoodControllerFind(
  req: Request,
  { params }: FoodDynamicParam
): Promise<NextResponse> {
  return await ApiHandler<FoodType>(
    async () => {
      const result: FoodType | null = await Food.findOne({ _id: params._id });
      if (result) {
        return {
          data: result,
          message: ResponseSuccessMessages.FindFood,
        };
      } else {
        return {
          message: ResponseSuccessMessages.NotFoundFood,
          status: 404,
        };
      }
    },
    {
      req,
      schema: createSchema,
      errorMessage: ResponseErrorMessages.Error,
    }
  );
}

// Delete by id branch
async function FoodControllerDelete(
  req: Request,
  { params }: FoodDynamicParam
): Promise<NextResponse> {
  return await ApiHandler<FoodType>(
    async () => {
      const result = await Food.findOne({ _id: params._id });
      if (result) {
        await Food.deleteOne({ _id: params._id });
        return {
          message: ResponseSuccessMessages.DeleteFood,
        };
      } else {
        return {
          message: ResponseSuccessMessages.NotFoundFood,
          status: 404,
        };
      }
    },
    {
      req,
      schema: createSchema,
      errorMessage: ResponseErrorMessages.Error,
    }
  );
}

// Find Food by id branch
async function FoodControllerFindByBranchId(
  req: Request,
  { params }: FoodDynamicParam
): Promise<NextResponse> {
  return await ApiHandler<FoodType[]>(
    async () => {
      const branch = await Branch.findOne({ _id: params.branchId }).exec();
      if (branch) {
        const result: FoodType[] = await Food.find({ branches: branch._id }).exec();
        if (result.length > 0) {
          return {
            data: result,
            message: ResponseSuccessMessages.FindFood,
          };
        } else {
          return {
            message: ResponseSuccessMessages.NotFoundFood,
            status: 404,
          };
        }
      } else {
        return {
          message: ResponseSuccessMessages.NotFoundBranch,
          status: 404,
        };
      }
    },
    {
      req,
      schema: createSchema,
      errorMessage: ResponseErrorMessages.Error,
    }
  );
}
