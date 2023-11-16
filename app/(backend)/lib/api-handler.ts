import { z } from 'zod';
import { NextResponse } from 'next/server';
import { type ControllerJsonBody } from '@BackEnd/types';
import {
  apiResponse,
  dbConnect,
  ErrorHandler,
  ResponseErrorMessages,
  type ResponseMessages,
} from '@BackEnd/lib';
import { validate } from 'uuid';
import { ApiKey } from '@BackEnd/models/api-key.model';

export type ApiHandlerOptions = {
  req: Request;
  schema: z.ZodTypeAny;
  errorMessage?: ResponseMessages;
  hasBody?: boolean;
  isVerify?: boolean;
};

export type ApiHandlerReturn<T> = ControllerJsonBody<T> & {};

export async function ApiHandler<SchemaType>(
  fn: (_body: SchemaType | any) => Promise<ApiHandlerReturn<SchemaType>>,
  { isVerify, ...options }: ApiHandlerOptions
): Promise<NextResponse> {
  try {
    await dbConnect();
    const isXApiKey = options.req.headers.has('x-api-key');
    const XApiKey = options.req.headers.get('x-api-key');
    if (!isVerify) {
      return await ApiHandlerValidation(fn, options);
    }
    if (isVerify && isXApiKey && XApiKey) {
      if (validate(XApiKey)) {
        try {
          const result = await ApiKey.findOne({ apiKey: XApiKey });
          if (result) {
            return await ApiHandlerValidation(fn, options);
          }
          return apiResponse<SchemaType>({
            data: null,
            message: ResponseErrorMessages.ApiKeyExpired,
            status: 401,
          });
        } catch (err: Error | unknown) {
          return new ErrorHandler(err).createError<SchemaType>(options.errorMessage);
        }
      }
      return apiResponse<SchemaType>({
        data: null,
        message: ResponseErrorMessages.APIKeyIsNotInValid,
        status: 401,
      });
    } else {
      return apiResponse<SchemaType>({
        data: null,
        message: ResponseErrorMessages.APIKeyIsNotAvailable,
        status: 401,
      });
    }
  } catch (err: Error | unknown) {
    return new ErrorHandler(err).createError<SchemaType>(options.errorMessage);
  }
}

async function ApiHandlerValidation<SchemaType>(
  fn: (_body: SchemaType | any) => Promise<ApiHandlerReturn<SchemaType>>,
  { req, schema, hasBody = false }: ApiHandlerOptions
): Promise<NextResponse> {
  let fnReturn: ApiHandlerReturn<SchemaType>;
  if (hasBody) {
    const body: SchemaType = schema.parse(await req.json());
    fnReturn = await fn(body);
  } else {
    fnReturn = await fn({});
  }
  return apiResponse<SchemaType>(fnReturn);
}
