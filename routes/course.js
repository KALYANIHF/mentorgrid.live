const express = require("express");
const courseRouter = express.Router({ mergeParams: true });
const Course = require("../models/Course");
const advanceResults = require("../middleware/advanceResults");
const { protect, authorize } = require("../middleware/auth");
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
  .post(protect, authorize("publisher", "admin"), createCourse);
courseRouter
  .route("/:id")
  .put(protect, authorize("publisher", "admin"), updateCourse)
  .patch(protect, authorize("publisher", "admin"), updateCourse)
  .delete(protect, authorize("publisher", "admin"), deleteCourse)
  .get(getCourse);

module.exports = courseRouter;
