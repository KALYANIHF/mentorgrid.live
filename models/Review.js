const mongoose = require("mongoose");
const slugify = require("slugify");
const reviewSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "The title is required"],
      trim: true,
      maxlength: [100, "Title can't be more than 100 characters"],
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
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// prevent the user from submitting more than one review
reviewSchema.index({ bootcamp: 1, user: 1 }, { unique: true });

module.exports = mongoose.model("Review", reviewSchema);
