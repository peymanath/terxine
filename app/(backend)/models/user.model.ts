import mongoose from 'mongoose';
import { UserType } from '@BackEnd/types';
import bcrypt from 'bcryptjs';

const SALT_WORK_FACTOR = 10;

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

schema.pre('save', function (next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err: Error | null, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

schema.methods.comparePassword = function (candidatePassword: any, cb: any) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

export const User = mongoose.models.User || mongoose.model<UserType>('User', schema);
