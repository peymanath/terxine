import { ControllerJsonBody } from '@BackEnd/types';
import { NextResponse } from 'next/server';

export function apiResponse<T>({
  data = null,
  errors = [],
  statusText = '',
  status = 200,
  message,
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
