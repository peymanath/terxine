import { ControllerJsonBody } from '@BackEnd/types';
import { NextResponse } from 'next/server';

export function apiResponse<T>({
  data = null,
  errors = [],
  statusText = '',
  status = 200,
  message,
  cookies,
}: ControllerJsonBody<T>): NextResponse {
  const res = NextResponse.json(
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
  if (!!cookies) {
    res.cookies.set(cookies);
  }
  return res;
}
