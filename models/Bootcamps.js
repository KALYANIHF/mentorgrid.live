const mongoose = require("mongoose");
const slugify = require("slugify");
const geocoder = require("../handlers/geocoder");
const geocoderApiBuilder = (address) => {
  if (!address) {
    return null;
  }
  return `https://geocode.maps.co/search?q=${address}&api_key=${process.env.GEOCODER_API_KEY}`;
};

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
BootCampSchema.pre("save", async function (next) {
  console.log(this.name);
  // slagify the the name
  this.slug = slugify(this.name, { lower: true });
  next();
});

BootCampSchema.pre("save", async function (next) {
  if (!this.address) {
    return next();
  }
  const loc = await geocoder.geocode(this.address);
  this.location = {
    type: "Point",
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress,
    street: loc[0].streetName,
    city: loc[0].city,
    zipcode: loc[0].zipcode,
    state: loc[0].administrativeLevels?.level1long || "",
    country: loc[0].countryCode,
  };
  this.address = undefined;
  next();
});
module.exports = mongoose.model("Bootcamp", BootCampSchema);
