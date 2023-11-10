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
});

export const Branch = mongoose.models.Branch || mongoose.model<BranchType>('Branch', branchSchema);
