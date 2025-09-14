const express = require("express");
const app = express();
require("@dotenvx/dotenvx").config();
const PORT = process.env.PORT || 3000;
const bootcampRouter = require("./routes/bootcamp");

app.use("/api/v1/bootcamps", bootcampRouter);

app.listen(PORT, () => {
  console.log(
    `The server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
