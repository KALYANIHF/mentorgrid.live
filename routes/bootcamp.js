const express = require("express");
const bootcampRouter = express.Router();
const Bootcamp = require("../models/Bootcamps");
const courseRouter = require("./course");
const advanceResults = require("../middleware/advanceResults");
const {
  getBootcamps,
  getBootCampById,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsByRadius,
  bootcampPhotoUpload,
} = require("../controllers/Bootcamp");

// re-route into other resource routers
bootcampRouter.use("/:bootcampId/courses", courseRouter);

bootcampRouter
  .route("/")
  .get(advanceResults(Bootcamp, "courses"), getBootcamps)
  .post(createBootcamp);
bootcampRouter
  .route("/:id")
  .get(getBootCampById)
  .put(updateBootcamp)
  .delete(deleteBootcamp);
bootcampRouter.route("/radius/:zipcode/:distance").get(getBootcampsByRadius);
bootcampRouter
  .route("/:id/photos")
  .put(bootcampPhotoUpload)
  .patch(bootcampPhotoUpload);

module.exports = bootcampRouter;
