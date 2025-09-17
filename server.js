const express = require("express");
const app = express();
require("@dotenvx/dotenvx").config();
const PORT = process.env.PORT || 3000;
const bootcampRouter = require("./routes/bootcamp");
const colors = require("colors");
const fs = require("fs");
const morgan = require("morgan");
const dbConnect = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
dbConnect();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);
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
