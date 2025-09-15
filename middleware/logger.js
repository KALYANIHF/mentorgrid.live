const logger = (req, res, next) => {
  console.log(
    `the route is calling: ${req.protocol}://${req.get("host")}${
      req.originalUrl
    }`
  );
  next();
};
module.exports = logger;
