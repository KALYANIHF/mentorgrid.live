const express = require("express");
const bootcampRouter = express.Router();
const courseRouter = require("./course");
const {
  getBootcamps,
  getBootCampById,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsByRadius,
} = require("../controllers/Bootcamp");

// re-route into other resource routers
bootcampRouter.use("/:bootcampId/courses", courseRouter);

bootcampRouter.route("/").get(getBootcamps).post(createBootcamp);
bootcampRouter
  .route("/:id")
  .get(getBootCampById)
  .put(updateBootcamp)
  .delete(deleteBootcamp);
bootcampRouter.route("/radius/:zipcode/:distance").get(getBootcampsByRadius);

module.exports = bootcampRouter;
