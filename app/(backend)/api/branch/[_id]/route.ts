import { BranchDynamicParam } from '@BackEnd/types';
import { NextResponse } from 'next/server';
import { BranchController } from '@BackEnd/controller';

// export async function DELETE(
//   _req: Request,
//   { params: { _id } }: BranchDynamicParam
// ): Promise<NextResponse> {
//   try {
//     await dbConnect();
//     await Branch.deleteOne({ _id });
//     return apiResponse<BranchType>({
//       data: null,
//       message: 'The branch was successfully deleted.',
//     });
//   } catch (err: Error | unknown) {
//     return new ErrorHandler(err).createError<BranchType>();
//   }
// }

export async function GET(req: Request, param: BranchDynamicParam): Promise<NextResponse> {
  return await BranchController.find(req, param);
}
