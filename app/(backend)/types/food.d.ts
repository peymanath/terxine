import { ObjectId } from 'mongoose';
import { NextResponse } from 'next/server';

export interface FoodType {
  name: string;
  ingredient: string[];
  minPrice: number;
  branches: string[];
  _id?: ObjectId;
  slug?: string;
  fromPrice?: number;
  perssentage?: number;
  rating?: string[];
  wishList?: string[];
}
export interface FoodDynamicParam {
  params: { _id: ObjectId; branchId: ObjectId };
}

export type FoodControllerType<Params = unknown> = {
  byBranch: (_req: Request, _params: Params) => Promise<NextResponse>;
};
