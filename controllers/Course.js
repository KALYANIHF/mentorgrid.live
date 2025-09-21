const ErrorResponse = require("../handlers/errorResponse");
const asyncHandler = require("../handlers/asyncHandler");
const Course = require("../models/Course");

/**
 * @desc Get all courses
 * @route GET /api/v1/courses
 * @route GET /api/v1/bootcamps/:bootcampId/courses
 * @access Public
 */

const getallCourses = asyncHandler(async (req, res, next) => {
  let query;
  if (req.params.bootcampId) {
    query = Course.find({ bootcamp: req.params.bootcampId });
  } else {
    query = Course.find();
  }
  const courses = await query;
  if (courses.length === 0) {
    return next(new ErrorResponse("No Course Found", 404));
  }
  res.status(200).json({
    success: true,
    message: "Courses retrieved successfully",
    data: courses,
  });
});

/**
 * @desc Get single course
 * @route GET /api/v1/courses/:id
 * @access Public
 */
const getCourse = asyncHandler(async (req, res, next) => {});

/**
 * @desc Create a new course
 * route POST /api/v1/courses
 * access Private
 */
module.exports = { getallCourses, getCourse };
