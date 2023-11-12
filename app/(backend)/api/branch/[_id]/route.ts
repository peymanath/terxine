import { apiResponse, dbConnect } from '@BackEnd/lib';
import { Branch } from '@BackEnd/models';
import { BranchDynamicParam, BranchType } from '@BackEnd/types';
import { ErrorHandler } from '@BackEnd/lib/error-handler';
import { NextResponse } from 'next/server';

export async function DELETE(
  _req: Request,
  { params: { _id } }: BranchDynamicParam
): Promise<NextResponse> {
  try {
    await dbConnect();
    await Branch.deleteOne({ _id });
    return apiResponse<BranchType>({
      data: null,
      message: 'The branch was successfully deleted.',
    });
  } catch (err: Error | unknown) {
    return new ErrorHandler(err).createError<BranchType>();
  }
}

export async function GET(
  _req: Request,
  { params: { _id } }: BranchDynamicParam
): Promise<NextResponse> {
  try {
    await dbConnect();
    const createBranch = await Branch.findOne({ _id });
    return apiResponse<BranchType>({
      data: createBranch,
      message: 'A branch was found',
    });
  } catch (err: Error | unknown) {
    return new ErrorHandler(err).createError<BranchType>();
  }
}
