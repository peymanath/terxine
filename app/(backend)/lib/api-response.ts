import { ControllerJsonBody } from '@BackEnd/types';
import { NextResponse } from 'next/server';

export function apiResponse<T>({
  data = null,
  message = '',
  errors = [],
  statusText = '',
  status = 200,
}: ControllerJsonBody<T>): NextResponse {
  return NextResponse.json(
    {
      data,
      errors,
      message,
      statusText,
      status,
    },
    {
      status,
      statusText,
    }
  );
}
