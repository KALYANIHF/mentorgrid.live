const mongoose = require("mongoose");
const CourseSchema = mongoose.Schema({
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
    type: String,
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
    type: String,
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
});

module.exports = mongoose.model("Course", CourseSchema);
