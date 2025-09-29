const ErrorResponse = require("../handlers/errorResponse");
const asyncHandler = require("../handlers/asyncHandler");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const sendEmail = require("../handlers/sendEmail");

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

/**
 * @desc forget password and send reset password link
 * @route POST /api/v1/auth/forgotpassword
 * @access Public
 */

const forgotpassword = asyncHandler(async (req, res, next) => {
  const { email } = req.body;
  // validate the email
  if (!email) {
    return next(new ErrorResponse("Please provide email", 400));
  }
  // find the user by email
  const user = await User.findOne({ email });
  if (!user) {
    return next(new ErrorResponse("No User Found", 404));
  }
  // generate the reset token
  const resetToken = await user.getResetPasswordToken();

  // save the reset token to the user model
  await user.save({
    validateBeforeSave: false,
  });
  // send the reset password link to the user
  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/auth/resetpassword/${resetToken}`;
  const message = `<p>Send reset password link to your email: <b>${email}</b></p> <p>Click on the link below to reset your password: <i><b>${resetPasswordUrl}</b></i></p> <p>This is valid for next 10 min</p> <p>Thanks</p> <p>Team</p>`;
  await sendEmail(email, message);
  res.status(200).json({
    success: true,
    message: "Password Reset Link Sent Successfully",
  });
});

/**
 * @desc reset password
 * @route POST /api/v1/auth/resetpassword/:token
 * @access Public
 */
const resetpassword = asyncHandler(async (req, res, next) => {
  const { token } = req.params;
  console.log(token);
  // decrypt the resetpasswordToken using token
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
  console.log(resetPasswordToken);
  // validate the token
  const user = await User.findOne({
    resetPasswordToken: resetPasswordToken,
    resetPasswordExpires: { $gt: Date.now() },
  });
  if (!user) {
    return next(new ErrorResponse("Invalid Token", 400));
  }
  // set the new password
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  await user.save();
  sendtokenResponse(user, 200, res, "Password Reset Successfully");
});

/**
 * @desc update user details
 * @route PUT /api/v1/auth/updateuser
 * @access Private
 */

const updateUserDetails = asyncHandler(async (req, res, next) => {
  const { name, email } = req.body;
  // validate the fields
  if (!name || !email) {
    return next(new ErrorResponse("Please provide all the fields", 400));
  }
  // find the user by id
  const user = await User.findById(req.user.id);
  if (!user) {
    return next(new ErrorResponse("No User Found", 404));
  }
  // update the user details
  user.name = name;
  user.email = email;
  await user.save();
  res.status(200).json({
    success: true,
    message: "User Details Updated Successfully",
    data: user,
  });
});

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
  sendtokenResponse,
  logoutUser,
  forgotpassword,
  resetpassword,
  updateUserDetails,
};
