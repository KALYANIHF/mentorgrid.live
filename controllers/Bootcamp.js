const Bootcamp = require("../models/Bootcamps");
const errorResponse = require("../handlers/errorResponse");
/**
 * @desc Get all bootcamps
 * @route GET /api/v1/bootcamps
 * @access Public
 */
const getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    if (!bootcamps) {
      return new errorResponse("No Bootcamps Found", 500);
    }
    if (bootcamps) {
      res.status(200).json({
        success: true,
        count: bootcamps.length,
        message: "Bootcamps retrieved successfully",
        data: bootcamps,
      });
    }
  } catch (err) {
    next(err);
  }
};

/**
 * @desc Get bootcamp by ID
 * @route GET /api/v1/bootcamps/:id
 * @access Public
 */
const getBootCampById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const bootcamp = await Bootcamp.findById(id);
    if (!bootcamp) {
      return new errorResponse("No Bootcamp Found", 500);
    }
    if (bootcamp) {
      res.status(200).json({
        success: true,
        message: `Bootcamp retrieved successfully for id ${id}`,
        data: bootcamp,
      });
    }
  } catch (err) {
    next(err);
  }
};

/**
 * @desc Create a new bootcamp
 * @route POST /api/v1/bootcamps
 * @access Private
 */
const createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    if (!bootcamp) {
      return new errorResponse("Failed to create Bootcamp", 500);
    }
    if (bootcamp) {
      res.status(201).json({
        success: true,
        message: "Bootcamp created successfully",
        data: bootcamp,
      });
    }
  } catch (err) {
    next(err);
  }
};

/**
 * @desc Update a bootcamp by ID
 * @route PUT /api/v1/bootcamps/:id
 * @access Private
 */
const updateBootcamp = async (req, res, next) => {
  try {
    const id = req.params.id;
    const bootcamp = await Bootcamp.findById(id);
    if (!bootcamp) {
      return new errorResponse("No Bootcamp Found", 500);
    }
    if (bootcamp) {
      const updateData = await Bootcamp.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });

      if (updateData) {
        res.status(200).json({
          success: true,
          message: `Bootcamp updated successfully for id ${id}`,
          data: updateData,
        });
      }
    }
  } catch (err) {
    next(err);
  }
};

/**
 * @desc Delete a bootcamp by ID
 * @route DELETE /api/v1/bootcamps/:id
 * @access Private
 */
const deleteBootcamp = async (req, res, next) => {
  try {
    const id = req.params.id;
    const bootcamp = await Bootcamp.findByIdAndDelete(id);
    if (!bootcamp) {
      return new errorResponse("No Bootcamp Found", 500);
    }
    if (bootcamp) {
      res.status(200).json({
        success: true,
        message: `Bootcamp deleted successfully for id ${id}`,
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getBootcamps,
  getBootCampById,
  updateBootcamp,
  createBootcamp,
  deleteBootcamp,
};
