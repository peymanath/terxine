import { ObjectId } from 'mongoose';

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

interface FoodDynamicParam {
  params: { _id: ObjectId };
}
