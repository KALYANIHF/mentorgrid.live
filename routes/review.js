const express = require("express");
const reviewRouter = express.Router();
const Review = require("../models/Review");
const Course = require("../models/Course");
const advanceResults = require("../middleware/advanceResults");
const { protect, authorize } = require("../middleware/auth");
const {
  getReview,
  getallReviews,
  createReview,
  updateReview,
  deleteReview,
} = require("../controllers/Review");

// define the routers for the reviews
reviewRouter
  .route("/")
  .get(advanceResults(Review, ["bootcamp", "user"]), getallReviews);
reviewRouter
  .route("/bootcamp/:bootcampid")
  .post(protect, authorize("user", "admin"), createReview);
reviewRouter
  .route("/:id")
  .put(protect, authorize("user", "admin"), updateReview)
  .delete(protect, authorize("user", "admin"), deleteReview)
  .get(getReview);

module.exports = reviewRouter;
