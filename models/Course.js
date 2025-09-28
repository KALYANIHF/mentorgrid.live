const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please enter a course title"],
  },
  description: {
    type: String,
    required: [true, "Please enter a course Description"],
  },
  weeks: {
    type: Number,
    required: [true, "Please enter the number of weeks in the course"],
  },
  tuition: {
    type: Number,
    required: [true, "Please enter the course tuition Cost"],
  },
  minimumSkill: {
    type: String,
    required: [true, "Please enter the minimum skill required for the course"],
    enum: ["beginner", "intermediate", "advanced"],
  },
  scholarshipAvailable: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  bootcamp: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bootcamp",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

// calculate the avg cost of all courses with aggregate function
CourseSchema.statics.getAverageCost = async function (bootcampId) {
  const obj = await this.aggregate([
    { $match: { bootcamp: bootcampId } },
    {
      $group: {
        _id: "$bootcamp",
        averageCost: { $avg: "$tuition" },
      },
    },
  ]);

  try {
    const update = obj.length
      ? { averageCost: Math.ceil(obj[0].averageCost / 10) * 10 }
      : { $unset: { averageCost: "" } };

    await this.model("Bootcamp").findByIdAndUpdate(bootcampId, update);
  } catch (err) {
    console.error(err);
  }
};

// After saving a course
CourseSchema.post("save", async function () {
  try {
    await this.constructor.getAverageCost(this.bootcamp);
  } catch (err) {
    console.error(err);
  }
});

// After removing with `course.remove()`
CourseSchema.pre("remove", async function () {
  try {
    await this.constructor.getAverageCost(this.bootcamp);
  } catch (err) {
    console.error(err);
  }
});

// After deleting with `findByIdAndDelete` / `findOneAndDelete`
CourseSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    try {
      await doc.constructor.getAverageCost(doc.bootcamp);
    } catch (error) {
      console.error(error);
    }
  }
});

module.exports = mongoose.model("Course", CourseSchema);
