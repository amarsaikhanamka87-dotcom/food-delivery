import mongoose, { Schema } from "mongoose";

const foodSchema = new Schema(
  {
    bookName: { type: String },
    publishedAt: { type: Number },
    description: { type: String },
  },
  {
    timestamps: true,
  },
);

export const Book = mongoose.model("Food", bookSchema);
