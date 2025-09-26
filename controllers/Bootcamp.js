const Bootcamp = require("../models/Bootcamps");
const ErrorResponse = require("../handlers/errorResponse");
const asyncHandler = require("../handlers/asyncHandler");
const geocoder = require("../handlers/geocoder");

/**
 * @desc Get all bootcamps
 * @route GET /api/v1/bootcamps
 * @access Public
 */
const getBootcamps = asyncHandler(async (req, res, next) => {
  let reqQuery = { ...req.query };

  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 25;
  const skip = (page - 1) * limit;

  // Fields to remove
  const removeQuery = [
    "select",
    "sort",
    "limit",
    "page",
    "lean",
    "populate",
    "leanPopulate",
    "leanVirtuals",
    "leanVirtualsPopulate",
  ];
  removeQuery.forEach((key) => delete reqQuery[key]);

  // Format Mongo operators
  let queryStr = JSON.stringify(reqQuery);
  queryStr = queryStr.replace(
    /\b(gte|lte|ne|gt|lt|in)\b/g,
    (match) => `$${match}`
  );

  // Base query
  let query = Bootcamp.find(JSON.parse(queryStr));

  // Select fields
  if (req.query.select) {
    query = query.select(req.query.select.split(",").join(" "));
  }

  // Sort
  if (req.query.sort) {
    query = query.sort(req.query.sort.split(",").join(" "));
  } else {
    query = query.sort("-createdAt");
  }

  // Pagination
  query = query.skip(skip).limit(limit);

  const bootcamps = await query.populate("courses");
  const total = await Bootcamp.countDocuments(JSON.parse(queryStr));

  if (bootcamps.length === 0) {
    return res.status(200).json({
      success: true,
      count: 0,
      total,
      page,
      pages: Math.ceil(total / limit),
      hasNextPage: page * limit < total,
      hasPrevPage: page > 1,
      message: "No bootcamps found for this query",
      data: [],
    });
  }

  res.status(200).json({
    success: true,
    count: bootcamps.length,
    total,
    page,
    pages: Math.ceil(total / limit),
    hasNextPage: page * limit < total,
    hasPrevPage: page > 1,
    message: "Bootcamps retrieved successfully",
    data: bootcamps,
  });
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
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!bootcamp) {
    return next(new ErrorResponse("No Bootcamp Found", 404));
  }

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

module.exports = {
  getBootcamps,
  getBootCampById,
  updateBootcamp,
  createBootcamp,
  deleteBootcamp,
  getBootcampsByRadius,
};
