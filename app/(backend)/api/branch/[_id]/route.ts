import { apiResponse, dbConnect } from '@BackEnd/lib';
import { Branch } from '@BackEnd/models';
import { BranchDynamicParam, BranchType } from '@BackEnd/types';
import { ErrorHandler } from '@BackEnd/lib/error-handler';

/**
 * @swagger
 * /api/branch:
 *   delete:
 *     description: Delete branch
 *     responses:
 *       200:
 *         description: Hello World!
 */
export async function DELETE(_req: Request, { params: { _id } }: BranchDynamicParam) {
  try {
    await dbConnect();
    await Branch.deleteOne({ _id });
    return apiResponse<BranchType>({
      data: null,
      message: 'The branch was successfully deleted.',
    });
  } catch (err) {
    return new ErrorHandler(err).createError<BranchType>();
  }
}

/**
 * @swagger
 * /api/branch/{_id}:
 *   get:
 *     description: Returns branch by id
 *     responses:
 *       200:
 *         description: Hello World!
 */
export async function GET(_req: Request, { params: { _id } }: BranchDynamicParam) {
  try {
    await dbConnect();
    const createBranch = await Branch.findOne({ _id });
    return apiResponse<BranchType>({
      data: createBranch,
      message: 'A branch was found',
    });
  } catch (err) {
    return new ErrorHandler(err).createError<BranchType>();
  }
}
