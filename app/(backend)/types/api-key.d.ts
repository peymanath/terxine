import { ObjectId } from 'mongoose';

export type ApiKeyType = {
  apiKey: string;
  expireAt: Date;
};

export interface ApiKeyDynamicParam {
  params: { _id: ObjectId; apiKey: string };
}
