import {
  ApiKeyDynamicParam,
  ApiKeyType,
  ControllerBase,
  ControllerBaseRequest,
} from '@BackEnd/types';
import { zfd } from 'zod-form-data';
import * as z from 'zod';
import { ApiHandler, ResponseMessages } from '@BackEnd/lib';
import { ApiKey } from '@BackEnd/models/api-key.model';
import { NextResponse } from 'next/server';
import { v4 } from 'uuid';
import ms from 'ms';

const createSchema = zfd.formData(
  z.object({
    time: z.string().optional(),
  })
);

export const ApiKeyController: ControllerBase<ApiKeyDynamicParam> = {
  create: ApiKeyControllerCreate,
  delete: ApiKeyControllerDelete,
  update: ApiKeyControllerCreate,
  getAll: ApiKeyControllerCreate,
  find: ApiKeyControllerFind,
};

// ApiKey Creator
async function ApiKeyControllerCreate(req: ControllerBaseRequest): Promise<NextResponse> {
  return await ApiHandler<ApiKeyType>(
    async body => {
      const result = await ApiKey.create<ApiKeyType>({
        apiKey: v4(),
        expireAt: new Date(Date.now() + ms(String(body.time) || '30 d')),
      });
      return {
        data: result,
        message: ResponseMessages.CreateNewApiKey,
      };
    },
    {
      req,
      schema: createSchema,
      errorMessage: undefined,
      hasBody: true,
      isVerify: false,
    }
  );
}

// ApiKey Delete
async function ApiKeyControllerDelete(
  req: ControllerBaseRequest,
  { params }: ApiKeyDynamicParam
): Promise<NextResponse> {
  return await ApiHandler<ApiKeyType>(
    async () => {
      const result = await ApiKey.findOne({ _id: params._id, apiKey: params.apiKey });
      if (result) {
        await ApiKey.deleteOne({ _id: params._id, apiKey: params.apiKey });
        return {
          message: ResponseMessages.DeleteApiKey,
        };
      } else {
        return {
          message: ResponseMessages.APIKeyIsNotAvailable,
        };
      }
    },
    {
      req,
      schema: createSchema,
    }
  );
}

// ApiKey Find
async function ApiKeyControllerFind(
  req: ControllerBaseRequest,
  { params }: ApiKeyDynamicParam
): Promise<NextResponse> {
  return await ApiHandler<ApiKeyType>(
    async () => {
      const result = await ApiKey.findOne({ apiKey: params.apiKey });
      return {
        data: result,
        message: ResponseMessages.FindApiKey,
      };
    },
    {
      req,
      schema: createSchema,
    }
  );
}
