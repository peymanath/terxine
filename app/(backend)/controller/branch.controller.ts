import {
  BranchDynamicParam,
  BranchType,
  ControllerBase,
  ControllerBaseRequest,
} from '@BackEnd/types';
import { Branch } from '@BackEnd/models';
import slugify from 'slugify';
import { zfd } from 'zod-form-data';
import * as z from 'zod';
import { NextResponse } from 'next/server';
import { ApiHandler, ResponseMessages } from '@BackEnd/lib'; // Create Controller Object

// Create Controller Object
export const BranchController: ControllerBase<BranchDynamicParam> = {
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
async function BranchControllerCreate(req: ControllerBaseRequest): Promise<NextResponse> {
  return await ApiHandler<BranchType>(
    async body => {
      const result = await Branch.create<BranchType>({
        ...body,
        slug: slugify(body.slug || body.name, { lower: true, remove: /[*+~.()'"!:@]/g }),
      });
      return {
        data: result,
        message: ResponseMessages.CreateNewBranch,
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
  req: ControllerBaseRequest,
  { params }: BranchDynamicParam
): Promise<NextResponse> {
  return await ApiHandler<BranchType>(
    async body => {
      const result: BranchType | null = await Branch.findOne({ _id: params._id });
      if (result) {
        const update = await Branch.findOneAndUpdate<BranchType>(
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
          message: ResponseMessages.UpdateBranchById,
        };
      } else {
        return {
          message: ResponseMessages.NotFoundBranch,
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

// Get All Branch
async function BranchControllerGetAll(req: ControllerBaseRequest): Promise<NextResponse> {
  return await ApiHandler<BranchType[]>(
    async (_, populate) => {
      const results: BranchType[] = await Branch.find().populate(populate ? 'foods' : '');

      if (results) {
        return {
          data: results,
          message: ResponseMessages.GetAllBranch,
        };
      } else {
        return {
          message: ResponseMessages.NotFoundBranch,
          status: 404,
        };
      }
    },
    {
      req,
      schema: createSchema,
      errorMessage: ResponseMessages.Error,
    }
  );
}

// Find by id branch
async function BranchControllerFind(
  req: ControllerBaseRequest,
  { params }: BranchDynamicParam
): Promise<NextResponse> {
  return await ApiHandler<BranchType>(
    async (_, populate) => {
      const result: BranchType | null = await Branch.findOne({ _id: params._id })
        .populate(populate ? 'foods' : '')
        .exec();
      if (result) {
        return {
          data: result,
          message: ResponseMessages.FindBranch,
        };
      } else {
        return {
          message: ResponseMessages.NotFoundBranch,
          status: 404,
        };
      }
    },
    {
      req,
      schema: createSchema,
      errorMessage: ResponseMessages.Error,
    }
  );
}

// Delete by id branch
async function BranchControllerDelete(
  req: ControllerBaseRequest,
  { params }: BranchDynamicParam
): Promise<NextResponse> {
  return await ApiHandler<BranchType>(
    async () => {
      const result = await Branch.findOne({ _id: params._id });
      if (result) {
        await Branch.deleteOne({ _id: params._id });
        return {
          message: ResponseMessages.DeleteBranch,
        };
      } else {
        return {
          message: ResponseMessages.NotFoundBranch,
          status: 404,
        };
      }
    },
    {
      req,
      schema: createSchema,
      errorMessage: ResponseMessages.Error,
    }
  );
}
