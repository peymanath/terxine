import { z } from 'zod';
import { NextResponse } from 'next/server';
import { ControllerBaseRequest, type ControllerJsonBody } from '@BackEnd/types';
import { apiResponse, dbConnect, ErrorHandler, ResponseMessages } from '@BackEnd/lib';
import { validate } from 'uuid';
import { ApiKey } from '@BackEnd/models/api-key.model';

export type ApiHandlerOptions = {
  req: ControllerBaseRequest;
  schema: z.ZodTypeAny;
  errorMessage?: ResponseMessages;
  hasBody?: boolean;
  isVerify?: boolean;
};

export async function ApiHandler<SchemaType>(
  fn: (_body: SchemaType | any, populate: boolean) => Promise<ControllerJsonBody<SchemaType>>,
  { isVerify = true, ...options }: ApiHandlerOptions
): Promise<NextResponse> {
  try {
    await dbConnect();
    const isXApiKey = options.req.headers.has('x-api-key');
    const XApiKey = options.req.headers.get('x-api-key');

    if (!isVerify) {
      return await ApiHandlerValidation(fn, options);
    } else {
      if (isXApiKey && XApiKey) {
        if (validate(XApiKey)) {
          try {
            const result = await ApiKey.findOne({ apiKey: XApiKey });
            if (result) {
              return await ApiHandlerValidation(fn, options);
            }
            return apiResponse<SchemaType>({
              message: ResponseMessages.ApiKeyExpired,
              status: 401,
            });
          } catch (err: Error | unknown) {
            return new ErrorHandler(err).createError<SchemaType>(options.errorMessage);
          }
        }
        return apiResponse<SchemaType>({
          message: ResponseMessages.APIKeyIsNotInValid,
          status: 401,
        });
      } else {
        return apiResponse<SchemaType>({
          message: ResponseMessages.APIKeyIsNotAvailable,
          status: 401,
        });
      }
    }
  } catch (err: Error | unknown) {
    return new ErrorHandler(err).createError<SchemaType>(options.errorMessage);
  }
}

async function ApiHandlerValidation<SchemaType>(
  fn: (_body: SchemaType | any, populate: boolean) => Promise<ControllerJsonBody<SchemaType>>,
  { req, schema, hasBody = false }: ApiHandlerOptions
): Promise<NextResponse> {
  let fnReturn: ControllerJsonBody<SchemaType>;
  const populate: boolean = req.nextUrl.searchParams.has('populate');
  if (hasBody) {
    const body: SchemaType = schema.parse(await req.json());
    fnReturn = await fn(body, populate);
  } else {
    fnReturn = await fn({}, populate);
  }
  return apiResponse<SchemaType>(fnReturn);
}
