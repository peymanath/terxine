import { ObjectId } from 'mongoose';

export type ApiKeyType = {
  apiKey: string;
  expireAt: Date;
};

export type ApiKeyDynamicParam = {
  params: { _id: ObjectId; apiKey: string };
};
