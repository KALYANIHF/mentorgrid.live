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
    const courses = await query;
    if (courses.length === 0) {
      return next(new ErrorResponse("No Course Found", 404));
    }
    res.status(200).json({
      success: true,
      message: "Courses retrieved successfully",
      data: courses,
    });
  } else {
    res.status(200).json(res.advanceResults);
  }
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
  req.body.user = req.user.id;
  const bootcamp = await Bootcamp.findById(bootcampId);
  if (!bootcamp) {
    return next(
      new ErrorResponse(
        `No bootcamp with the id of ${bootcampId} is Found`,
        404
      )
    );
  }
  // only the owner of the course and the admin will able to create a course
  if (bootcamp.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse("You are not authorized to create a course", 403)
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
  let course = await Course.findById(req.params.id);
  if (!course) {
    return next(new ErrorResponse("No Course Found", 404));
  }
  // before update the course check if the user is the owner of the course or the admin
  if (course.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse("You are not authorized to update a course", 403)
    );
  }
  // update the course
  course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
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
  // before update the course check if the user is the owner of the course or the admin
  if (course.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse("You are not authorized to update a course", 403)
    );
  }
  res.status(200).json({
    success: true,
    message: `Course deleted successfully with id ${req.params.id}`,
    data: {},
  });
});
module.exports = {
  getallCourses,
  getCourse,
  updateCourse,
  deleteCourse,
  createCourse,
};
