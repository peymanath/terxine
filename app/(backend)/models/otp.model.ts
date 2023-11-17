import mongoose from 'mongoose';
import { OtpType } from '@BackEnd/types';

const schema = new mongoose.Schema<OtpType>(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    code: {
      type: String,
      required: true,
    },
    expireAt: {
      type: Date,
      default: new Date(Date.now() + 60 * 1000),
    },
  },
  {
    timestamps: true,
  }
);

export const Otp = mongoose.models.Otp || mongoose.model<OtpType>('Otp', schema);
