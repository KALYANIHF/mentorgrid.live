const express = require("express");
const courseRouter = express.Router({ mergeParams: true });
const Course = require("../models/Course");
const advanceResults = require("../middleware/advanceResults");
const {
  getallCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/Course");

// define the routers for the courses
courseRouter
  .route("/")
  .get(advanceResults(Course, "bootcamp"), getallCourses)
  .post(createCourse);
courseRouter
  .route("/:id")
  .put(updateCourse)
  .patch(updateCourse)
  .delete(deleteCourse)
  .get(getCourse);

module.exports = courseRouter;
