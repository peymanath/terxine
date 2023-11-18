import mongoose from 'mongoose';
import { UserType } from '@BackEnd/types';

const schema = new mongoose.Schema<UserType>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
    },
    username: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String },
    phoneNumber: { type: String, required: true },
    isActive: { type: Boolean, default: false },
    nickname: String,
    birthdate: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.models.User || mongoose.model<UserType>('User', schema);
