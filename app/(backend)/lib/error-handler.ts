import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
import { apiResponse } from '@BackEnd/lib/api-response';
import { ControllerJsonBody } from '@BackEnd/types';

export class ErrorHandler {
  protected error: any;

  /**
   *
   * @param err
   */
  constructor(err: any) {
    this.error = err;
  }

  /**
   *
   */
  createError<T>() {
    if (this.error instanceof mongoose.Error.ValidationError) {
      return this.mongooseError<T>(this.error);
    } else {
      return this.otherError<T>();
    }
  }

  /**
   *
   * @param err {Type:ValidationError}
   */
  mongooseError<T>(err: mongoose.Error.ValidationError): NextResponse {
    let errorList: string[] = [];

    Object.values(err.errors).map(value => {
      errorList.push(value.message);
    });

    return this.response<T>({
      errors: errorList,
      message: 'Validation Error',
      statusText: 'Validation Error',
      status: 400,
    });
  }

  /**
   *
   *
   */
  otherError<T>(): NextResponse {
    return this.response<T>({ message: 'Has Any Error', errors: [], status: 400 });
  }

  /**
   *
   * @param responseData
   */
  response<T>(responseData: ControllerJsonBody<T>): NextResponse {
    return apiResponse<T>(responseData);
  }
}
