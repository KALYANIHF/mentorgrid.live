const express = require("express");
const bootcampRouter = express.Router();
const Bootcamp = require("../models/Bootcamps");
const courseRouter = require("./course");
const advanceResults = require("../middleware/advanceResults");
const { protect, authorize } = require("../middleware/auth");
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
  .post(protect, authorize("publisher", "admin"), createBootcamp);
bootcampRouter
  .route("/:id")
  .get(getBootCampById)
  .put(protect, authorize("publisher", "admin"), updateBootcamp)
  .delete(protect, authorize("publisher", "admin"), deleteBootcamp);
bootcampRouter.route("/radius/:zipcode/:distance").get(getBootcampsByRadius);
bootcampRouter
  .route("/:id/photos")
  .put(protect, authorize("publisher", "admin"), bootcampPhotoUpload)
  .patch(protect, authorize("publisher", "admin"), bootcampPhotoUpload);

module.exports = bootcampRouter;
