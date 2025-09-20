const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dbConnect = require("./config/db");
dbConnect();
const bootcamps = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, "utf-8")
);
const Bootcamp = require("./models/Bootcamps");
const importData = async () => {
  try {
    await Bootcamp.create(bootcamps);
    console.log(`Data Imported ...`.green.underline.bold);
  } catch (error) {
    console.log(error);
  }
};
const deleteData = async () => {
  try {
    await Bootcamp.deleteMany({});
    console.log(`Data Deleted ...`.red.underline.bold);
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === "-d") {
  deleteData();
} else if (process.argv[2] === "-i") {
  importData();
} else {
  console.log("Invalid command. Use -i to import data or -d to delete data.");
}
