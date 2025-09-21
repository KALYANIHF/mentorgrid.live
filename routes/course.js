const express = require("express");
const courseRouter = express.Router();
const {
  getallCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/Course");

// define the routers for the courses
courseRouter.route("/").get(getallCourses).post(createCourse);
courseRouter
  .route("/:id")
  .post(updateCourse)
  .delete(deleteCourse)
  .get(getCourse);

module.exports = courseRouter;
