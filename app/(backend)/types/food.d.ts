import { ObjectId } from 'mongoose';

export interface FoodType {
  _id?: ObjectId;
  slug?: string;
  name: string;
  ingredient: string[];
  minPrice: number;
  fromPrice?: number;
  perssentage?: number;
  rating?: number[];
  wishList: string[];
  branches: string[];
}

interface FoodDynamicParam {
  params: { _id: ObjectId };
}
