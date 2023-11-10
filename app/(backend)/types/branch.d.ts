import { ObjectId } from 'mongoose';

export interface BranchType {
  _id?: ObjectId;
  slug?: string;
  name: string;
  images: string[];
  phoneNumbers: string[];
  address: string;
  workingHours: string[];
}

interface BranchDynamicParam {
  params: { _id: ObjectId };
}
