const ErrorResponse = require("../handlers/errorResponse");
const asyncHandler = require("../handlers/asyncHandler");
const Course = require("../models/Course");
const Bootcamp = require("../models/Bootcamps");

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
    query = Course.find().populate({
      path: "bootcamp",
      select: "name description",
    });
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
const getCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id).populate("bootcamp");
  if (!course) {
    return next(new ErrorResponse("No Course Found", 404));
  }
  res.status(200).json({
    success: true,
    message: "Course retrieved successfully",
    data: course,
  });
});

/**
 * @desc Create a new course
 * @route POST /api/v1/courses
 * @access Private
 */
const createCourse = asyncHandler(async (req, res, next) => {
  const bootcampId = req.body.bootcamp;
  console.log(bootcampId);
  const bootcamp = await Bootcamp.findById(bootcampId);
  if (!bootcamp) {
    return next(
      new ErrorResponse(
        `No bootcamp with the id of ${bootcampId} is Found`,
        404
      )
    );
  }
  const course = await Course.create(req.body);
  res.status(201).json({
    success: true,
    message: "Course created successfully",
    data: course,
  });
});
/**
 * @desc Update a course
 * @route PUT /api/v1/courses/:id
 * @access Private
 */
const updateCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  }).populate("bootcamp");
  if (!course) {
    return next(new ErrorResponse("No Course Found", 404));
  }
  res.status(200).json({
    success: true,
    message: "Course updated successfully",
    data: course,
  });
});
/**
 * @desc Delete a course
 * @route DELETE /api/v1/courses/:id
 * @access Private
 */
const deleteCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.findByIdAndDelete(req.params.id);
  if (!course) {
    return next(new ErrorResponse("No Course Found", 404));
  }
  res.status(200).json({
    success: true,
    message: "Course deleted successfully",
    data: course,
  });
});
module.exports = {
  getallCourses,
  getCourse,
  updateCourse,
  deleteCourse,
  createCourse,
};
