import { NextRequest, NextResponse } from 'next/server';
import { type ResponseMessages } from '@BackEnd/lib';
import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';

export type ControllerJsonBody<T> = {
  data?: T | null;
  errors?: string[];
  message: ResponseMessages;
  status?: number;
  statusText?: string;
  cookies?: ResponseCookie;
};

export type ControllerBaseRequest = Request & NextRequest;

export type ControllerBase<Params = unknown> = {
  create: (_req: ControllerBaseRequest) => Promise<NextResponse>;
  delete: (_req: ControllerBaseRequest, _params: Params) => Promise<NextResponse>;
  update: (_req: ControllerBaseRequest, _params: Params) => Promise<NextResponse>;
  find: (_req: ControllerBaseRequest, _params: Params) => Promise<NextResponse>;
  getAll: (_req: ControllerBaseRequest) => Promise<NextResponse>;
};
