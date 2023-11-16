import type { NextRequest } from 'next/server';
import { apiResponse, ResponseErrorMessages } from '@BackEnd/lib';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith('/api')) {
    if (request.headers.has('x-api-key')) {
    } else {
      return apiResponse({
        data: null,
        message: ResponseErrorMessages.APIKeyIsNotAvailable,
        status: 403,
      });
    }
  }
}
