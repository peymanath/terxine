import { apiResponse, dbConnect } from '@BackEnd/lib';
import { BranchType } from '@BackEnd/types';
import { zfd } from 'zod-form-data';
import { Branch } from '@BackEnd/models';
import { ErrorHandler } from '@BackEnd/lib/error-handler';

const schema = zfd.formData({
  branchName: zfd.text(),
});

export async function POST(req: Request) {
  const { branchName } = schema.parse(await req.formData());
  try {
    await dbConnect();
    await Branch.create({ branchName: branchName });
    return apiResponse<BranchType>({
      data: { branchName },
      message: 'Create Branch Successfuly !',
    });
  } catch (err) {
    return new ErrorHandler(err).createError<BranchType>();
  }
}
