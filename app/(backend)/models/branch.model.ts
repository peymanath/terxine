import mongoose, { Schema } from 'mongoose';
import { BranchType } from '@BackEnd/types';

const branchSchema = new Schema<BranchType>({
  branchName: {
    type: String,
    required: [true, 'Branch Name is Required'],
    trim: true,
    minlength: [5, 'Branch Name most be larger than character'],
  },
});

export const Branch = mongoose.models.Branch || mongoose.model<BranchType>('Branch', branchSchema);
