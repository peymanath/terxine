import { ObjectId } from 'mongoose';

export type BranchType = {
  _id?: ObjectId;
  slug?: string;
  name: string;
  images: string[];
  phoneNumbers: string[];
  address: string;
  workingHours: string[];
  map: {
    lat: number;
    lng: number;
  };
  foods?: string[];
};

export type BranchDynamicParam = {
  params: { _id: ObjectId; populate: boolean };
};
