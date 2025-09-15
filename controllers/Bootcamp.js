/**
 * @desc Get all bootcamps
 * @route GET /api/v1/bootcamps
 * @access Public
 */
const getBootcamps = (req, res) => {
  res.status(200).json({
    message: "Bootcamps retrieved successfully",
    data: {
      bootcamps: [],
    },
  });
};

/**
 * @desc Get bootcamp by ID
 * @route GET /api/v1/bootcamps/:id
 * @access Public
 */
const getBootCampById = (req, res) => {
  res.status(200).json({
    message: "Bootcamp retrieved successfully",
    data: {
      bootcamp: {},
    },
  });
};

/**
 * @desc Create a new bootcamp
 * @route POST /api/v1/bootcamps
 * @access Private
 */
const createBootcamp = (req, res) => {
  res.status(201).json({
    message: "Bootcamp created successfully",
    data: {},
  });
};

/**
 * @desc Update a bootcamp by ID
 * @route PUT /api/v1/bootcamps/:id
 * @access Private
 */
const updateBootcamp = (req, res) => {
  res.status(200).json({
    message: "Bootcamp updated successfully",
    data: {},
  });
};

/**
 * @desc Delete a bootcamp by ID
 * @route DELETE /api/v1/bootcamps/:id
 * @access Private
 */
const deleteBootcamp = (req, res) => {
  res.status(200).json({
    message: "Bootcamp deleted successfully",
    data: {},
  });
};

module.exports = {
  getBootcamps,
  getBootCampById,
  updateBootcamp,
  createBootcamp,
  deleteBootcamp,
};
