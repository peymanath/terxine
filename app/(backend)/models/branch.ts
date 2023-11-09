import mongoose, { Schema } from 'mongoose';

interface Branch {
  branchName: string;
}

const branchSchema = new Schema<Branch>({
  branchName: {
    type: String,
    required: [true, 'Branch Name is Required'],
    trim: true,
    minlength: [5, 'Branch Name most be larger than character'],
  },
});

const Branch = mongoose.models.Branch || mongoose.model('Branch', branchSchema);
export { Branch };
