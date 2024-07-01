import mongoose, { Schema } from "mongoose";

const userSchama = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowecase: true,
      index: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    profilePhoto: {
      type: String,// cloudinary url
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },

    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchama);
