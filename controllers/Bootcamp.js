const Bootcamp = require("../models/Bootcamps");
const ErrorResponse = require("../handlers/errorResponse");
const asyncHandler = require("../handlers/asyncHandler");
const geocoder = require("../handlers/geocoder");
const fs = require("fs");

/**
 * @desc Get all bootcamps
 * @route GET /api/v1/bootcamps
 * @access Public
 */
const getBootcamps = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advanceResults);
});

/**
 * @desc Get bootcamp by ID
 * @route GET /api/v1/bootcamps/:id
 * @access Public
 */
const getBootCampById = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);

  if (!bootcamp) {
    return next(new ErrorResponse("No Bootcamp Found", 404));
  }

  res.status(200).json({
    success: true,
    message: `Bootcamp retrieved successfully for id ${req.params.id}`,
    data: bootcamp,
  });
});

/**
 * @desc Create a new bootcamp
 * @route POST /api/v1/bootcamps
 * @access Private
 */
const createBootcamp = asyncHandler(async (req, res, next) => {
  // add the user to the body
  req.body.user = req.user.id;
  // if the user is not a admin then he/she can only add one bootcamp
  const getExistsBootcamp = await Bootcamp.findOne({ user: req.user.id });
  if (getExistsBootcamp && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `the user with id ${req.user.id} already has a bootcamp`,
        400
      )
    );
  }
  const bootcamp = await Bootcamp.create(req.body);

  res.status(201).json({
    success: true,
    message: "Bootcamp created successfully",
    data: bootcamp,
  });
});

/**
 * @desc Update a bootcamp by ID
 * @route PUT /api/v1/bootcamps/:id
 * @access Private
 */
const updateBootcamp = asyncHandler(async (req, res, next) => {
  let bootcamp = await Bootcamp.findById(req.params.id);

  if (!bootcamp) {
    return next(new ErrorResponse("No Bootcamp Found", 404));
  }

  // make sure the user is bootcamp owner
  if (bootcamp.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `the user with id ${req.user.id} does not have permission to update this bootcamp`,
        403
      )
    );
  }

  bootcamp = Bootcamp.findOneAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    message: `Bootcamp updated successfully for id ${req.params.id}`,
    data: bootcamp,
  });
});

/**
 * @desc Delete a bootcamp by ID
 * @route DELETE /api/v1/bootcamps/:id
 * @access Private
 */
const deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);

  if (!bootcamp) {
    return next(new ErrorResponse("No Bootcamp Found", 404));
  }

  // make sure the user is bootcamp owner
  if (bootcamp.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `the user with id ${req.user.id} does not have permission to delete this bootcamp`,
        403
      )
    );
  }
  await bootcamp.deleteOne();
  res.status(200).json({
    success: true,
    message: `Bootcamp deleted successfully for id ${req.params.id}`,
  });
});

/**
 * @desc get bootcamps with in a radius or in a specific Zone
 * @route GET /api/v1/bootcamps/radius/:zipcode/:distance
 * @access Public
 */

const getBootcampsByRadius = asyncHandler(async (req, res, next) => {
  const { zipcode, distance } = req.params;
  // get the lat,lng from the geocoder
  const geoData = await geocoder.geocode(zipcode);
  const lat = geoData[0].latitude;
  const lng = geoData[0].longitude;
  // calc the radius using radians
  const radius = distance / 6378; // convert distance to radians in km
  const bootcamps = await Bootcamp.find({
    location: {
      $geoWithin: {
        $centerSphere: [[lng, lat], radius],
      },
    },
  });
  if (bootcamps.length === 0) {
    return next(new ErrorResponse("No Bootcamps Found", 404));
  }
  res.status(200).json({
    success: true,
    count: bootcamps.length,
    message: `Bootcamps retrieved successfully within ${distance} km of ${zipcode}`,
    data: bootcamps,
  });
});

/**
 * @desc Upload photo for the bootcamps
 * @route POST /api/v1/bootcamps/:id/photo
 * @access Private
 */

const bootcampPhotoUpload = asyncHandler(async (req, res, next) => {
  if (!req.files) {
    return next(new ErrorResponse("No file uploaded", 400));
  }
  const bootcamp = await Bootcamp.findById(req.params.id);
  if (!bootcamp) {
    return next(new ErrorResponse("No Bootcamp Found", 404));
  }
  // check for the file type only image
  if (req.files.file.mimetype.split("/")[0] !== "image") {
    return next(new ErrorResponse("File type is not an image", 400));
  }
  // check for the size limit
  if (req.files.file.size > 1024 * 1024 * 5) {
    return next(
      new ErrorResponse("File size is too large it must be with in 5MB", 400)
    );
  }
  // rename the uploaded image so that it should not overwrite the existing images inside the folder
  const filename = "photo_" + req.params.id + "-" + req.files.file.name;

  // only the bootcamp owner and admin is allowed to upload a photo for the bootcamp
  if (bootcamp.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `the user with id ${req.user.id} does not have permission to upload a photo for this bootcamp`,
        403
      )
    );
  }

  // upload the file to the local folder using the mv function in req.files
  req.files.file.mv(`./public/uploads/${filename}`, async (err) => {
    if (err) {
      console.log(err);
      return next(new ErrorResponse("Error uploading file", 500));
    }
    await Bootcamp.findByIdAndUpdate(req.params.id, {
      $set: { photo: filename },
    });
    res.status(200).json({
      success: true,
      message: `Photo uploaded successfully for id ${req.params.id}`,
      data: bootcamp,
    });
  });
});

module.exports = {
  getBootcamps,
  getBootCampById,
  updateBootcamp,
  createBootcamp,
  deleteBootcamp,
  getBootcampsByRadius,
  bootcampPhotoUpload,
};
