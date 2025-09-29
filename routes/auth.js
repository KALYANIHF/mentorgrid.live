const express = require("express");
const authRouter = express.Router();
const {
  registerUser,
  loginUser,
  getCurrentUser,
  forgotpassword,
  resetpassword,
  updateUserDetails,
} = require("../controllers/auth");
const User = require("../models/User");
const { protect } = require("../middleware/auth");

// define the routers for the users
authRouter.route("/register").post(registerUser);
authRouter.route("/login").post(loginUser);
authRouter.route("/me").get(protect, getCurrentUser);
authRouter.route("/updatedetails").put(protect, updateUserDetails);
authRouter.route("/forgetpassword").post(forgotpassword);
authRouter.route("/resetpassword/:token").post(resetpassword);

module.exports = authRouter;
