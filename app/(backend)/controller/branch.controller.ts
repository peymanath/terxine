import { BranchDynamicParam, BranchType, ControllerBase } from '@BackEnd/types';
import { Branch } from '@BackEnd/models';
import slugify from 'slugify';
import { zfd } from 'zod-form-data';
import * as z from 'zod';
import { NextResponse } from 'next/server';
import { ApiHandler, ResponseErrorMessages, ResponseSuccessMessages } from '@BackEnd/lib'; // Create Controller Object

// Create Controller Object
export const BranchController: ControllerBase<BranchType, BranchDynamicParam> = {
  create: BranchControllerCreate,
  update: BranchControllerUpdate,
  getAll: BranchControllerGetAll,
  find: BranchControllerFind,
  delete: BranchControllerDelete,
};

// Schema Data Model
const createSchema = zfd.formData(
  z.object({
    slug: z.string().optional(),
    name: z.string(),
    images: z.string().array(),
    phoneNumbers: z
      .string({
        required_error: 'Please Add phone Numbers',
      })
      .array(),
    address: z.string(),
    workingHours: z.string().array(),
    map: z.object({
      lat: z.number(),
      lng: z.number(),
    }),
    foods: z.string().array().optional(),
  })
);
const updateSchema = zfd.formData(
  z.object({
    slug: z.string().optional(),
    name: z.string().optional(),
    images: z.string().array().optional(),
    phoneNumbers: z
      .string({
        required_error: 'Please Add phone Numbers',
      })
      .array()
      .optional(),
    address: z.string().optional(),
    workingHours: z.string().array().optional(),
    map: z
      .object({
        lat: z.number(),
        lng: z.number(),
      })
      .optional(),
    foods: z.string().array().optional(),
  })
);

// Branch Creator
async function BranchControllerCreate(req: Request): Promise<NextResponse> {
  return await ApiHandler<BranchType>(
    async body => {
      const result = await Branch.create<BranchType>({
        ...body,
        slug: slugify(body.slug || body.name, { lower: true, remove: /[*+~.()'"!:@]/g }),
      });
      return {
        data: result,
        message: ResponseSuccessMessages.CreateNewBranch,
      };
    },
    {
      req,
      schema: createSchema,
      errorMessage: undefined,
      hasBody: true,
    }
  );
}

// Branch Update
async function BranchControllerUpdate(
  req: Request,
  { params }: BranchDynamicParam
): Promise<NextResponse> {
  return await ApiHandler<BranchType>(
    async body => {
      const result = await Branch.findOneAndUpdate<BranchType>(
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
        data: result,
        message: ResponseSuccessMessages.UpdateBranchById,
      };
    },
    {
      req,
      schema: updateSchema,
      errorMessage: undefined,
      hasBody: true,
    }
  );
}

// Get All Branch
async function BranchControllerGetAll(req: Request): Promise<NextResponse> {
  return await ApiHandler<BranchType[]>(
    async () => {
      const result: BranchType[] = await Branch.find();
      return {
        data: result,
        message: ResponseSuccessMessages.GetAllBranch,
      };
    },
    {
      req,
      schema: createSchema,
      errorMessage: ResponseErrorMessages.Error,
    }
  );
}

// Find by id branch
async function BranchControllerFind(
  req: Request,
  { params }: BranchDynamicParam
): Promise<NextResponse> {
  return await ApiHandler<BranchType>(
    async () => {
      const result: BranchType | null = await Branch.findOne({ _id: params._id });
      return {
        data: result,
        message: ResponseSuccessMessages.FindBranch,
      };
    },
    {
      req,
      schema: createSchema,
      errorMessage: ResponseErrorMessages.Error,
    }
  );
}

// Delete by id branch
async function BranchControllerDelete(
  req: Request,
  { params }: BranchDynamicParam
): Promise<NextResponse> {
  return await ApiHandler<BranchType>(
    async () => {
      await Branch.deleteOne({ _id: params._id });
      return {
        data: null,
        message: ResponseSuccessMessages.DeleteBranch,
      };
    },
    {
      req,
      schema: createSchema,
      errorMessage: ResponseErrorMessages.Error,
    }
  );
}
