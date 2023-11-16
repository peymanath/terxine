import { NextRequest, NextResponse } from 'next/server';
import { type ResponseMessages } from '@BackEnd/lib';

export type ControllerJsonBody<T> = {
  data?: T | null;
  errors?: string[];
  message: ResponseMessages;
  status?: number;
  statusText?: string;
};

export type ControllerBaseRequest = Request & NextRequest;

export type ControllerBase<Params = unknown> = {
  create: (_req: ControllerBaseRequest) => Promise<NextResponse>;
  delete: (_req: ControllerBaseRequest, _params: Params) => Promise<NextResponse>;
  update: (_req: ControllerBaseRequest, _params: Params) => Promise<NextResponse>;
  find: (_req: ControllerBaseRequest, _params: Params) => Promise<NextResponse>;
  getAll: (_req: ControllerBaseRequest) => Promise<NextResponse>;
};
