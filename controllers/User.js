const asyncHandler = require("../handlers/asyncHandler");
const ErrorResponse = require("../middleware/errorHandler");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

/**
 * @desc get all users
 * @route GET /api/v1/auth/users
 * @access Private/admin
 */
const getUsers = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advanceResults);
});
/**
 * @desc get a single user
 * @route GET /api/v1/auth/users/:id
 * @access Private/admin
 */
const getUser = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const users = await User.findById(id);
  if (!users) {
    return next(new ErrorResponse(`No users found`, 404));
  }
  res.status(200).json({
    status: "success",
    message: "User Found",
    data: users,
  });
});
/**
 * @desc create a user
 * @route POST /api/v1/users/
 * @access Private/admin
 */
const createUser = asyncHandler(async (req, res, next) => {
  const users = await User.create(req.body, {
    new: true,
    runValidators: true,
  });
  if (!users) {
    return next(new ErrorResponse(`Not able to create a User`, 500));
  }
  res.status(200).json({
    status: "success",
    message: "User Created",
    data: users,
  });
});
/**
 * @desc update a user
 * @route PUT /api/v1/auth/users/:id
 * @access Private/admin
 */
const updateUser = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const users = await User.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!users) {
    return next(new ErrorResponse(`No users found`, 404));
  }
  res.status(200).json({
    status: "success",
    message: `User with id ${id} has updated successfully`,
    data: users,
  });
});
/**
 * @desc delete a user
 * @route DELETE /api/v1/auth/users/:id
 * @access Private/admin
 */
const deleteUser = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const users = await User.findByIdAndDelete(id);
  if (!users) {
    return next(new ErrorResponse(`No users found to Delete`, 404));
  }
  res.status(200).json({
    status: "success",
    message: `User with id ${id} has been deleted`,
    data: {},
  });
});

module.exports = {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  createUser,
};
