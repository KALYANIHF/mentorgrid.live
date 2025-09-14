const express = require("express");
const bootcampRouter = express.Router();
const { getBootcamps } = require("../controllers/Bootcamp");

bootcampRouter.get("/", getBootcamps);

module.exports = bootcampRouter;
