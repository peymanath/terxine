import mongoose, { Schema } from 'mongoose';
import { BranchType } from '@BackEnd/types';

const branchSchema = new Schema<BranchType>({
  name: {
    type: String,
    required: [true, 'Branch Name is Required'],
    trim: true,
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },
  address: {
    type: String,
    required: [true, 'Branch Address is Required'],
    trim: true,
  },
  images: [
    {
      type: String,
      required: [true, 'Branch Images is Required'],
      trim: true,
    },
  ],
  phoneNumbers: [
    {
      type: String,
      required: [true, 'Branch Phone Numbers is Required'],
      trim: true,
    },
  ],
  workingHours: [
    {
      type: String,
      required: [true, 'Branch Working Hours is Required'],
      trim: true,
    },
  ],
});

export const Branch = mongoose.models.Branch || mongoose.model<BranchType>('Branch', branchSchema);
