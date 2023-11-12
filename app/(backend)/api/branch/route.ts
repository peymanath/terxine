import { apiResponse, dbConnect } from '@BackEnd/lib';
import { BranchType } from '@BackEnd/types';
import * as z from 'zod';
import { zfd } from 'zod-form-data';
import { Branch } from '@BackEnd/models';
import { ErrorHandler } from '@BackEnd/lib/error-handler';
import slugify from 'slugify';
import { NextResponse } from 'next/server';

const schema = zfd.formData(
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
    foods: z.string().array().optional(),
  })
);

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { name, images, phoneNumbers, workingHours, slug, address, foods }: BranchType =
      schema.parse(await req.json());
    await dbConnect();
    const createBranch = await Branch.create<BranchType>({
      name,
      images,
      phoneNumbers,
      workingHours,
      slug: slugify(slug || name, { lower: true, remove: /[*+~.()'"!:@]/g }),
      address,
      foods,
    });
    return apiResponse<BranchType>({
      data: createBranch,
      message: 'The branch was created successfully.',
    });
  } catch (err: Error | unknown) {
    return new ErrorHandler(err).createError<BranchType>();
  }
}

export async function GET(): Promise<NextResponse> {
  try {
    await dbConnect();
    const createBranch = await Branch.find();
    return apiResponse<BranchType[]>({
      data: createBranch,
      message: 'The branch was created successfully.',
    });
  } catch (err: Error | unknown) {
    return new ErrorHandler(err).createError<BranchType>();
  }
}
