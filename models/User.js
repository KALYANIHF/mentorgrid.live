const mongoose = require("mongoose");
const slugify = require("slugify");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "The name is required"],
      trim: true,
      unique: [true, "The name must be Uniqe"],
      maxlength: [50, "Name can't be more than 50 characters"],
    },
    slug: String,
    email: {
      type: String,
      required: [true, "The email is required"],
      unique: [true, "Email already exists"],
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
    profilePicture: {
      type: String,
      default: "no-image.png",
    },
    coverPhoto: {
      type: String,
      default: "no-image.png",
    },
    socialLinks: {
      facebook: String,
      twitter: String,
      instagram: String,
      linkedin: String,
      github: String,
    },
    bootcamp: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bootcamp",
      required: false,
    },
    courses: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.slug = slugify(this.name, { lowerCase: true });
  // hash the password
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// sign JWT and return
userSchema.methods.getsignJwtToken = async function () {
  const token = await jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
  return token;
};

userSchema.methods.getResetPasswordToken = async function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

module.exports = mongoose.model("User", userSchema);
