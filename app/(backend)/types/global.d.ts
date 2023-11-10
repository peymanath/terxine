import { NextResponse } from 'next/server';

export type ControllerJsonBody<T> = {
  data?: T | null;
  errors?: string[];
  message: string;
  status?: number;
  statusText?: string;
};

export type ControllerBaseRecord<T, JsonBody> = Record<string, (_req: T) => NextResponse<JsonBody>>;

export type ControllerBase<T, JsonBody = ControllerJsonBody<T>> = ControllerBaseRecord<
  T,
  JsonBody
> & {
  create: (_req: T) => NextResponse<JsonBody>;
  update: (_req: T) => NextResponse<JsonBody>;
  delete: (_req: T) => NextResponse<JsonBody>;
  find: (_req: T) => NextResponse<JsonBody>;
  getAll: (_req: T) => NextResponse<JsonBody>;
};
