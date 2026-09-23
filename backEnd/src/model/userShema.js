import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: { type: String },
    password: { type: String },
    phoneNumber: { type: String },
  },
  {
    timestamps: true,
  },
);

export const User = mongoose.model("User", userSchema);
