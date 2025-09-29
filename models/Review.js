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
// define the statc method to calculate the avgRating for the review on add and remove
reviewSchema.statics.getAverageRating = async function (bootcampId) {
  const obj = await this.aggregate([
    { $match: { bootcamp: bootcampId } },
    {
      $group: {
        _id: "$bootcamp",
        averageRating: { $avg: "$rating" },
      },
    },
  ]);

  if (obj.length > 0) {
    try {
      const update = obj.length
        ? { averageRating: Math.ceil(obj[0].averageRating / 10) * 10 }
        : { $unset: { averageRating: "" } };
      await this.model("Bootcamp").findByIdAndUpdate(bootcampId, update);
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("not able to add the avgRating");
  }
};

reviewSchema.post("save", async function () {
  try {
    // this is calling
    console.log("calling the avgRating after save");
    await this.constructor.getAverageRating(this.bootcamp);
  } catch (error) {
    console.log(error);
  }
});
reviewSchema.pre("remove", async function () {
  try {
    console.log("calling the avgRating before delete");
    await this.constructor.getAverageRating(this.bootcamp);
  } catch (error) {
    console.log(error);
  }
});

module.exports = mongoose.model("Review", reviewSchema);
