import { NextResponse } from 'next/server';
import { type ResponseMessages } from '@BackEnd/lib';

export type ControllerJsonBody<T> = {
  data?: T | null;
  errors?: string[];
  message: ResponseMessages;
  status?: number;
  statusText?: string;
};

export type ControllerBase<Params = unknown> = {
  create: (_req: Request) => Promise<NextResponse>;
  delete: (_req: Request, _params: Params) => Promise<NextResponse>;
  update: (_req: Request, _params: Params) => Promise<NextResponse>;
  find: (_req: Request, _params: Params) => Promise<NextResponse>;
  getAll: (_req: Request) => Promise<NextResponse>;
};
