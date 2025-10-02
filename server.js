const express = require("express");
const app = express();
require("@dotenvx/dotenvx").config();
const PORT = process.env.PORT || 3000;
const bootcampRouter = require("./routes/bootcamp");
const courseRouter = require("./routes/course");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const reviewRouter = require("./routes/review");
const expressMongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const swaggerDocs = require("./swagger");
const xss = require("xss-clean");
const hpp = require("hpp");
const expressLimit = require("express-rate-limit");
const cors = require("cors");
const colors = require("colors");
const fs = require("fs");
const qs = require("qs");
const path = require("path");
const morgan = require("morgan");
const dbConnect = require("./config/db");
const cookieParser = require("cookie-parser");
const fileupload = require("express-fileupload");
const errorHandler = require("./middleware/errorHandler");
dbConnect();
app.set("query parser", (str) => qs.parse(str));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileupload());
app.use(cookieParser());
app.use((req, res, next) => {
  req.body = expressMongoSanitize.sanitize(req.body);
  req.params = expressMongoSanitize.sanitize(req.params);
  req.query = expressMongoSanitize.sanitize(req.query); // store sanitized version separately
  next();
});
app.use(helmet());
// app.use(xss());
app.use(
  expressLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000, // limit each IP to 100 requests per windowMs
    standardHeaders: "draft-8",
    legacyHeaders: false,
    extended: false,
    ipv6Subnet: 56,
    message: "Too many requests from this IP, please try again later",
  })
); // limit the number of requests from each IP to 100 per 15 minutes
app.use(hpp());
app.use(
  cors({
    credentials: true,
  })
);
app.use(express.static(path.join(__dirname, "public")));
if (process.env.NODE_ENV === "development") {
  app.use(
    morgan("dev", {
      stream: fs.createWriteStream("access.log", {
        flags: "a",
      }),
    })
  );
}
swaggerDocs(app, PORT);
app.use("/api/v1/bootcamps", bootcampRouter);
app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use(errorHandler);
const handler = app.listen(PORT, () => {
  console.log(
    `The server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  handler.close(() => {
    process.exit(1);
  });
});
