import mongoose from 'mongoose';
import { FoodType } from '@BackEnd/types';

const foodSchema = new mongoose.Schema<FoodType>({
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
  ingredient: [{ type: String, required: true }],
  minPrice: { type: Number, required: true },
  fromPrice: { type: Number, default: 0 },
  perssentage: { type: Number, default: 0 },
  rating: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rate' }],
  wishList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Wish' }],
  branches: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Branch', required: true }],
});

export const Food = mongoose.models.Food || mongoose.model<FoodType>('Food', foodSchema);
