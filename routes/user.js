const express = require("express");
const userRouter = express.Router();
const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require("../controllers/auth");
const User = require("../models/User");
const { protect } = require("../middleware/auth");

// define the routers for the users
userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(loginUser);
userRouter.route("/me").get(protect, getCurrentUser);

module.exports = userRouter;
