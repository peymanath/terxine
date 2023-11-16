import mongoose from 'mongoose';
import * as z from 'zod';
import { MongoServerError } from 'mongodb';
import { NextResponse } from 'next/server';
import { ControllerJsonBody } from '@BackEnd/types';
import {
  apiResponse,
  mongoDbErrors,
  ResponseErrorMessages,
  type ResponseMessages,
} from '@BackEnd/lib';

/**
 * Error Handler for BackEnd Apis
 */
export class ErrorHandler {
  protected error: Error | unknown;

  /**
   *
   * @param err
   */
  constructor(err: Error | unknown) {
    this.error = err;
  }

  /**
   *
   */
  createError<T>(message?: ResponseMessages, status?: number): NextResponse {
    if (this.error instanceof mongoose.Error.ValidationError) {
      return this.mongooseValidationError<T>(this.error);
    } else if (this.error instanceof z.ZodError) {
      return this.zodError<T>(this.error);
    } else if (this.error instanceof MongoServerError) {
      return this.mongodbServerError<T>(this.error);
    } else {
      return this.otherError<T>(this.error, message, status);
    }
  }

  /**
   *
   * @param err {Type:ValidationError}
   */
  mongooseValidationError<T>(err: mongoose.Error.ValidationError): NextResponse {
    let errorList: string[] = [];

    Object.values(err.errors).forEach(value => {
      errorList.push(value.message);
    });

    return this.response<T>({
      errors: errorList,
      message: ResponseErrorMessages.MongooseValidation,
      status: 400,
    });
  }

  /**
   *
   * @param err {Type:ValidationError}
   */
  mongodbServerError<T>(err: MongoServerError): NextResponse {
    let errorList: string[] = [];

    if (err.code && mongoDbErrors[Number(err.code)]) {
      errorList.push(
        `${err.name} code_${err.code}: ${
          !!err.code ? mongoDbErrors[Number(err.code)] : 'Error'
        } Please Check this page https://github.com/mongodb/mongo/blob/master/src/mongo/base/error_codes.yml`
      );
    }

    if (!!err.keyPattern) {
      Object.keys(err.keyPattern).forEach(key => {
        errorList.push(`ERROR for ${key}`);
      });
    }

    if (!err.code && !mongoDbErrors[Number(err.code)] && !err.keyPattern) {
      errorList.push(`ERROR for ${err.name}`);
    }

    return this.response<T>({
      errors: errorList,
      message: ResponseErrorMessages.Error,
      statusText: `${err.name} Error`,
      status: 500,
    });
  }

  /**
   *
   * @param err {Type:ValidationError}
   */
  zodError<T>(err: z.ZodError): NextResponse {
    let errorList: string[] = [];

    Object.values(err.issues).forEach(value => {
      errorList.push(`${value.path[0]}: ${value.message}`);
    });

    return this.response<T>({
      errors: errorList,
      message: ResponseErrorMessages.ZodValidation,
      status: 400,
    });
  }

  /**
   *
   *
   */
  otherError<T>(_err: Error | unknown, message?: ResponseMessages, status?: number): NextResponse {
    return this.response<T>({
      message: message || ResponseErrorMessages.Any,
      errors: [],
      status: status || 400,
    });
  }

  /**
   *
   * @param responseData
   */
  response<T>(responseData: ControllerJsonBody<T>): NextResponse {
    return apiResponse<T>(responseData);
  }
}
