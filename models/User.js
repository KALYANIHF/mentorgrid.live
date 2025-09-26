const mongoose = require("mongoose");
const slugify = require("slugify");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "The name is required"],
      unique: true,
      trim: true,
      maxlength: [50, "Name can't be more than 50 characters"],
    },
    slug: String,
    email: {
      type: String,
      required: [true, "The email is required"],
      match: [
        /^[\w-]+(\.[\w-]+)*@[\w-]+\.[\w-]{2,6}$/,
        "Please enter a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "The password is required"],
      minlength: [6, "Password must be at least 6 characters"],
      select: false,
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    active: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ["user", "admin", "publisher"],
      required: [true, "Please assign a valid role"],
      default: "user",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    profilePicture: {},
    coverPhoto: {},
    socialLinks: {},
    bootcamp: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bootcamp",
      default: null,
    },
    courses: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      default: [],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.pre("save", async function (next) {
  this.name = slugify(this.name, { lowerCase: true });
  next();
});

module.exports = mongoose.model("User", userSchema);
