import { z } from 'zod';
import { NextResponse } from 'next/server';
import { type ControllerJsonBody } from '@BackEnd/types';
import { apiResponse, dbConnect, ErrorHandler, type ResponseMessages } from '@BackEnd/lib';

export type ApiHandlerOptions = {
  req: Request;
  schema: z.ZodTypeAny;
  errorMessage?: ResponseMessages;
  hasBody?: boolean;
};
export type ApiHandlerOptionsBody = {
  req: Request;
  schema: z.ZodTypeAny;
  errorMessage?: ResponseMessages;
  hasBody?: boolean;
};

export type ApiHandlerReturn<T> = ControllerJsonBody<T> & {};

export async function ApiHandler<SchemaType>(
  fn: (_body: SchemaType | any) => Promise<ApiHandlerReturn<SchemaType>>,
  { hasBody = false, schema, errorMessage, req }: ApiHandlerOptions
): Promise<NextResponse> {
  try {
    await dbConnect();
    let fnReturn: ApiHandlerReturn<SchemaType>;
    if (hasBody) {
      const body: SchemaType = schema.parse(await req.json());
      fnReturn = await fn(body);
    } else {
      fnReturn = await fn({});
    }
    return apiResponse<SchemaType>(fnReturn);
  } catch (err: Error | unknown) {
    return new ErrorHandler(err).createError<SchemaType>(errorMessage);
  }
}
