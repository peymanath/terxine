import { NextResponse } from 'next/server';
import { BranchType, ControllerBase } from '@BackEnd/types';

const Controller: ControllerBase<BranchType> = {
  str: () => NextResponse.json({ dal: 'dassax' }),
  find: () => NextResponse.json({ dal: 'dassax' }),
  create: () => NextResponse.json({ dal: 'dassax' }),
  all: () => NextResponse.json({ dal: 'dassax' }),
};
