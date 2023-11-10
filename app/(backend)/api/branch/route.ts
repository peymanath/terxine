import { apiResponse, dbConnect } from '@BackEnd/lib';
import { BranchType } from '@BackEnd/types';
import * as z from 'zod';
import { zfd } from 'zod-form-data';
import { Branch } from '@BackEnd/models';
import { ErrorHandler } from '@BackEnd/lib/error-handler';
import slugify from 'slugify';

const schema = zfd.formData(
  z.object({
    name: z.string(),
    slug: z.string().optional(),
    images: z.string().array(),
    phoneNumbers: z
      .string({
        required_error: 'Please Add phone Numbers',
      })
      .array(),
    address: z.string(),
    workingHours: z.string().array(),
  })
);

export async function POST(req: Request) {
  try {
    const { name, images, phoneNumbers, workingHours, slug, address }: BranchType = schema.parse(
      await req.json()
    );
    await dbConnect();
    const createBranch = await Branch.create<BranchType>({
      name,
      images,
      phoneNumbers,
      workingHours,
      slug: slugify(slug || name, { lower: true, remove: /[*+~.()'"!:@]/g }),
      address,
    });
    return apiResponse<BranchType>({
      data: createBranch,
      message: 'The branch was created successfully.',
    });
  } catch (err) {
    return new ErrorHandler(err).createError<BranchType>();
  }
}
