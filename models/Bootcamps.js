const mongoose = require("mongoose");
const BootCampSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "The name is required"],
      unique: true,
      trim: true,
      maxlength: [50, "Name can't be more than 50 characters"],
    },
    slug: String,
    description: {
      type: String,
      required: true,
      maxlength: 500,
    },
    website: {
      type: String,
      match: [
        /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+~#=]*)*$/,
        "Please enter a valid URL",
      ],
    },
    phone: {
      type: String,
      required: [true, "The phone number is required"],
    },
    email: {
      type: String,
      required: [true, "The email is required"],
      match: [
        /^[\w-]+(\.[\w-]+)*@[\w-]+\.[\w-]{2,6}$/,
        "Please enter a valid email",
      ],
    },
    address: {
      type: String,
      required: [true, "The address is required"],
      maxlength: 300,
    },
    location: {
      // Geo json point
      type: {
        type: String,
        enum: ["Points"],
      },
      coordinates: {
        type: [Number],
        index: "2dshpere",
      },
      formattedAddress: String,
      street: String,
      city: String,
      zipcode: String,
      country: String,
    },
    careers: {
      type: [String],
      require: true,
      enum: [
        "Web Development",
        "Mobile Development",
        "UI/UX",
        "Data Science",
        "Business",
        "Other",
      ],
    },
    averageRating: {
      type: Number,
      min: [1, "Rating must be at least 1"],
      max: [10, "Rating can not be more then 10"],
    },
    averageCost: Number,
    photo: {
      type: String,
      default: "no-photo.jpg",
    },
    housing: {
      type: Boolean,
      default: false,
    },
    jobAssistance: {
      type: Boolean,
      default: false,
    },
    jobGuarantee: {
      type: Boolean,
      default: false,
    },
    acceptGi: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);
module.exports = mongoose.model("Bootcamp", BootCampSchema);
