const express = require("express");
const bootcampRouter = express.Router();
const {
  getBootcamps,
  getBootCampById,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/Bootcamp");

bootcampRouter.route("/").get(getBootcamps).post(createBootcamp);
bootcampRouter
  .route("/:id")
  .get(getBootCampById)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = bootcampRouter;
