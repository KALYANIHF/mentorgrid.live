const mongoose = require("mongoose");
const dbConnect = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URL);
  console.log(
    `Database connected successfully ${conn.connection.host}`.cyan.underline
  );
};
module.exports = dbConnect;
