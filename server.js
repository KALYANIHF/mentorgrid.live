const express = require("express");
const app = express();
require("@dotenvx/dotenvx").config();
const PORT = process.env.PORT || 3000;
const bootcampRouter = require("./routes/bootcamp");
const fs = require("fs");
const morgan = require("morgan");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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

app.listen(PORT, () => {
  console.log(
    `The server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
