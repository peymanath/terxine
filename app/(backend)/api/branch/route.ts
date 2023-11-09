import { connectDb } from '@BackEnd/database';
import { Branch } from '@BackEnd/models';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    await connectDb();
    await Branch.create({ branchName: 'salam khobi' });

    return NextResponse.json({
      message: 'Successfuly',
    });
  } catch (err) {
    console.log(err);
  }
}
