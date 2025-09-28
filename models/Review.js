const mongoose = require("mongoose");
const slugify = require("slugify");
const reviewSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "The title is required"],
      trim: true,
      maxlength: [50, "Title can't be more than 50 characters"],
    },
    rating: {
      type: Number,
      required: [true, "The rating is required"],
      min: 1,
      max: 10,
    },
    comment: {
      type: String,
      required: [true, "The comment is required"],
      maxlength: [500, "Comment can't be more than 500 characters"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "The user is required"],
    },
    bootcamp: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bootcamp",
      required: [true, "The bootcamp is required"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "The user is required"],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

module.exports = mongoose.model("Review", reviewSchema);
