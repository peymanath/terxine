import { ObjectId } from 'mongoose';

export interface BranchType {
  _id?: ObjectId;
  slug?: string;
  name: string;
  images: string[];
  phoneNumbers: string[];
  address: string;
  workingHours: string[];
  foods?: string[];
}

export interface BranchDynamicParam {
  params: { _id: ObjectId };
}
