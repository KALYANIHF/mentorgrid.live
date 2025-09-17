const errorHandler = (req, res, next, err) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
  next();
};

module.exports = errorHandler;
