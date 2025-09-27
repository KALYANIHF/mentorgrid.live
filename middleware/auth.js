const jwt = require("jsonwebtoken");
const ErrorResponse = require("../handlers/errorResponse");
const asyncHandler = require("../handlers/asyncHandler");
const User = require("../models/User");

exports.protect = asyncHandler(async (req, res, next) => {
  //   const token = req.cookies.jwt;
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(new ErrorResponse("Not authorized", 401));
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    return next(new ErrorResponse("Token is not valid", 401));
  }
});

exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorResponse(
          `You as a ${req.user.role} do not have permission to access this route`,
          403
        )
      );
    }
    next();
  };
};
