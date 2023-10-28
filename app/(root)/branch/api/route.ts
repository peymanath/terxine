import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  console.log({ request });
  return NextResponse.json({
    next: 1,
  });
}

export async function POST(request: Request) {
  console.log({ request });
  return NextResponse.json({
    next: 1,
  });
}
