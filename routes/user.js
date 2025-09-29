const express = require("express");
const userRouter = express.Router();
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  createUser,
} = require("../controllers/User");
const User = require("../models/User");
const advanceResults = require("../middleware/advanceResults");
const { protect, authorize } = require("../middleware/auth");

userRouter.use(protect, authorize("admin"));

// define the routers for the users
userRouter
  .route("/")
  .get(advanceResults(User, ["bootcamp", "courses"]), getUsers)
  .post(createUser);
userRouter.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = userRouter;
