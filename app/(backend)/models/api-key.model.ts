import mongoose from 'mongoose';
import { ApiKeyType } from '@BackEnd/types';

const schema = new mongoose.Schema<ApiKeyType>(
  {
    apiKey: {
      type: String,
      unique: true,
    },
    expireAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export const ApiKey = mongoose.models.ApiKey || mongoose.model<ApiKeyType>('ApiKey', schema);
