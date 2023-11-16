import { ApiKeyDynamicParam, ApiKeyType, ControllerBase } from '@BackEnd/types';
import { zfd } from 'zod-form-data';
import * as z from 'zod';
import { ApiHandler, ResponseSuccessMessages } from '@BackEnd/lib';
import { ApiKey } from '@BackEnd/models/api-key.model';
import { NextResponse } from 'next/server';
import { v4 } from 'uuid';

const createSchema = zfd.formData(
  z.object({
    time: z.number().optional(),
  })
);

export const ApiKeyController: ControllerBase<ApiKeyType, ApiKeyDynamicParam> = {
  create: ApiKeyControllerCreate,
  delete: ApiKeyControllerDelete,
  update: ApiKeyControllerCreate,
  getAll: ApiKeyControllerCreate,
  find: ApiKeyControllerCreate,
};

// ApiKey Creator
async function ApiKeyControllerCreate(req: Request): Promise<NextResponse> {
  return await ApiHandler<ApiKeyType>(
    async body => {
      const result = await ApiKey.create<ApiKeyType>({
        apiKey: v4(),
        expireAt: new Date(Date.now() + parseInt(body.time, 10) * 1000),
      });
      return {
        data: result,
        message: ResponseSuccessMessages.CreateNewApiKey,
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

// ApiKey Delete
async function ApiKeyControllerDelete(
  req: Request,
  { params }: ApiKeyDynamicParam
): Promise<NextResponse> {
  return await ApiHandler<ApiKeyType>(
    async () => {
      await ApiKey.deleteOne({ _id: params._id, apiKey: params.apiKey });
      return {
        data: null,
        message: ResponseSuccessMessages.DeleteApiKey,
      };
    },
    {
      req,
      schema: createSchema,
    }
  );
}
