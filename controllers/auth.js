const ErrorResponse = require("../handlers/errorResponse");
const asyncHandler = require("../handlers/asyncHandler");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

/**
 * @desc Register a User
 * @route /api/v1/auth/register
 * @access Public
 */

const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  // run validator for all the fields
  if (!name || !email || !password || !role) {
    return next(new ErrorResponse("Please provide all the fields", 400));
  }
  const user = await User.create({
    name,
    email,
    password,
    role,
  });
  if (!user) {
    return next(new ErrorResponse("Not able to Register a User", 500)); // have some issue in registering user to the server end
  }
  sendtokenResponse(user, 200, res, "User Registerd Successfully");
});

/**
 * @desc Register a User
 * @route /api/v1/auth/register
 * @access Public
 */

const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  // run validator for all the fields
  if (!email || !password) {
    return next(new ErrorResponse("Please provide all the fields", 400));
  }
  const user = await User.findOne({
    email,
  }).select("+password");
  // validate the user using decrypt the password
  if (!user) {
    return next(new ErrorResponse("Invalid Credentials", 401));
  }
  if (!(await bcrypt.compare(password, user.password))) {
    return next(new ErrorResponse("Invalid Credentials", 401));
  }
  sendtokenResponse(user, 200, res, "User Loggedin Successfully");
});

/**
 * @desc logout user
 * @route /api/v1/auth/logout
 * @access public
 */

const logoutUser = asyncHandler(async (req, res, next) => {
  res.cookie("token", "", {
    expires: new Date(0),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "User LoggedOut successfully",
  });
});

/**
 * @desc Get current user
 * @route /api/v1/auth/me
 * @access Private
 */
const getCurrentUser = asyncHandler(async (req, res, next) => {
  // via jwt token or cookie data
  const user = await User.findById(req.user.id).select("+password");
  res.status(200).json({
    success: true,
    message: "User retrieved successfully",
    data: user,
  });
});

// Get token from model, create cookie , and send it in response
const sendtokenResponse = async (user, statusCode, res, message) => {
  const token = await user.getsignJwtToken();
  res.cookie("token", token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // only in production
  });
  res.status(statusCode).json({
    success: true,
    message,
    data: user,
    token,
  });
};

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
  sendtokenResponse,
  logoutUser,
};
