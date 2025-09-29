const express = require("express");
const app = express();
require("@dotenvx/dotenvx").config();
const PORT = process.env.PORT || 3000;
const bootcampRouter = require("./routes/bootcamp");
const courseRouter = require("./routes/course");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
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
app.use("/api/v1/bootcamps", bootcampRouter);
app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
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
