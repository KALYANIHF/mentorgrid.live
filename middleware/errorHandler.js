// middleware/errorHandler.js
const ErrorResponse = require("../handlers/errorResponse");

const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Server Error";

  // Log error stack (dev only)
  if (process.env.NODE_ENV === "development") {
    console.error(err.stack);
  }

  // 🔹 Handle known error types
  if (err.name === "ValidationError") {
    message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
    statusCode = 400;
  }

  if (err.code && err.code === 11000) {
    const field = Object.keys(err.keyValue);
    message = `Duplicate value for field: ${field}`;
    statusCode = 400;
  }

  if (err.name === "CastError") {
    message = `Resource not found with id of ${err.value}`;
    statusCode = 404;
  }

  if (err.name === "JsonWebTokenError") {
    message = "Invalid token. Please log in again.";
    statusCode = 401;
  }

  if (err.name === "TokenExpiredError") {
    message = "Your session has expired. Please log in again.";
    statusCode = 401;
  }

  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    message = "Invalid JSON payload.";
    statusCode = 400;
  }

  if (err.name === "MulterError") {
    message = err.message;
    statusCode = 400;
  }

  // Wrap in custom error response
  const error = new ErrorResponse(message, statusCode);

  // 🔹 Final response
  res.status(statusCode).json({
    success: false,
    error: error.message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    data: null,
  });
};

module.exports = errorHandler;
