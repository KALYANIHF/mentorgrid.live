require("@dotenvx/dotenvx").config();
const dbConnect = require("./config/db");
const fs = require("fs");
const colors = require("colors");

dbConnect();

const bootcamps = JSON.parse(
  fs.readFileSync(__dirname + "/_data/bootcamps.json", "utf8")
);
const courses = JSON.parse(
  fs.readFileSync(__dirname + "/_data/courses.json", "utf8")
);
const reviews = JSON.parse(
  fs.readFileSync(__dirname + "/_data/reviews.json", "utf8")
);
const users = JSON.parse(
  fs.readFileSync(__dirname + "/_data/users.json", "utf8")
);

/*console.log(bootcamps);
console.log(courses);
console.log(reviews);
console.log(users);*/

const Bootcamp = require("./models/Bootcamps");
const Course = require("./models/Course");
const Review = require("./models/Review");
const User = require("./models/User");

const importData = async () => {
  try {
    await Bootcamp.create(bootcamps);
    await Course.create(courses);
    await User.create(users);
    await Review.create(reviews);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await Bootcamp.deleteMany();
    await Course.deleteMany();
    await User.deleteMany();
    await Review.deleteMany();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

(async () => {
  if (process.argv[2] === "-i") {
    await importData();
    console.log(`Data imported ...`.green.underline);
    process.exit();
  } else if (process.argv[2] === "-d") {
    await deleteData();
    console.log(`Data Deleted ...`.red.underline);
    process.exit();
  } else {
    console.log("Usage: node seeder.js -i (import) | -d (delete)".yellow);
    process.exit();
  }
})();
