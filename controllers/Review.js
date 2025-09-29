const ErrorResponse = require("../handlers/errorResponse");
const asyncHandler = require("../handlers/asyncHandler");
const Course = require("../models/Course");
const Bootcamp = require("../models/Bootcamps");
const Review = require("../models/Review");

/**
 * @desc Get all reviews
 * @route GET /api/v1/reviews
 * @access Public
 */

const getallReviews = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advanceResults);
});

/**
 * @desc Get single review
 * @route GET /api/v1/reviews/:id
 * @access Public
 */
const getReview = asyncHandler(async (req, res, next) => {
  const review = await Review.findById(req.params.id).populate({
    path: ["bootcamp", "user"],
    select: "name",
  });
  if (!review) {
    return next(new ErrorResponse("No Course Found", 404));
  }
  res.status(200).json({
    success: true,
    message: "Found Review",
    data: review,
  });
});

/**
 * @desc Create a new review
 * @route POST /api/v1/reviews
 * @access Private
 */
const createReview = asyncHandler(async (req, res, next) => {
  req.body.bootcamp = req.params.bootcampid;
  req.body.user = req.user.id;
  const bootcamp = await Bootcamp.findById(req.params.bootcampid);
  if (!bootcamp) {
    return next(
      new ErrorResponse(
        `No bootcamp with the id of ${req.params.bootcampid} is Found`,
        404
      )
    );
  }
  console.log(req.body);
  const review = await Review.create(req.body);
  res.status(201).json({
    success: true,
    message: `Review created successfully for bootcamp ${req.params.bootcampid}`,
    data: review,
  });
});
/**
 * @desc Update a course
 * @route PUT /api/v1/courses/:id
 * @access Private
 */
const updateReview = asyncHandler(async (req, res, next) => {
  let review = await Review.findById(req.params.id);
  if (!review) {
    return next(new ErrorResponse("No Course Found", 404));
  }
  // before update the course check if the user is the owner of the course or the admin
  if (review.user.toString() !== req.user.id && req.user.role !== "publisher") {
    return next(
      new ErrorResponse("You are not authorized to update a course", 403)
    );
  }
  // update the course
  review = await Review.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    message: "Review updated successfully",
    data: review,
  });
});
/**
 * @desc Delete a course
 * @route DELETE /api/v1/courses/:id
 * @access Private
 */
const deleteReview = asyncHandler(async (req, res, next) => {
  const review = await Review.findByIdAndDelete(req.params.id);
  if (!review) {
    return next(new ErrorResponse("No Course Found", 404));
  }
  // before update the course check if the user is the owner of the course or the admin
  if (review.user.toString() !== req.user.id && req.user.role !== "publisher") {
    return next(
      new ErrorResponse(
        `You are not authorized to delete this review with id ${req.params.id}`,
        403
      )
    );
  }
  res.status(200).json({
    success: true,
    message: `Review deleted successfully with id ${req.params.id}`,
    data: {},
  });
});
module.exports = {
  getallReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview,
};
