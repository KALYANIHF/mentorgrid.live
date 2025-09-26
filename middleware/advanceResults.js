const advanceResults = (model, populate) => async (req, res, next) => {
  let reqQuery = { ...req.query };

  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 25;
  const skip = (page - 1) * limit;
  let results;

  // Fields to remove
  const removeQuery = [
    "select",
    "sort",
    "limit",
    "page",
    "lean",
    "populate",
    "leanPopulate",
    "leanVirtuals",
    "leanVirtualsPopulate",
  ];
  removeQuery.forEach((key) => delete reqQuery[key]);

  // Format Mongo operators
  let queryStr = JSON.stringify(reqQuery);
  queryStr = queryStr.replace(
    /\b(gte|lte|ne|gt|lt|in)\b/g,
    (match) => `$${match}`
  );

  // Base query
  let query = model.find(JSON.parse(queryStr));

  // Select fields
  if (req.query.select) {
    query = query.select(req.query.select.split(",").join(" "));
  }

  // Sort
  if (req.query.sort) {
    query = query.sort(req.query.sort.split(",").join(" "));
  } else {
    query = query.sort("-createdAt");
  }

  // Pagination
  query = query.skip(skip).limit(limit);
  if (populate) {
    results = await query.populate(populate);
  } else {
    results = await query;
  }
  const total = await model.countDocuments(JSON.parse(queryStr));

  if (results.length === 0) {
    return res.status(200).json({
      success: true,
      count: 0,
      total,
      page,
      pages: Math.ceil(total / limit),
      hasNextPage: page * limit < total,
      hasPrevPage: page > 1,
      message: "No Resource found for this query",
      data: [],
    });
  }
  res.advanceResults = {
    success: true,
    count: results.length,
    total,
    page,
    pages: Math.ceil(total / limit),
    hasNextPage: page * limit < total,
    hasPrevPage: page > 1,
    message: "Resource found successfully",
    data: results,
  };
  next();
};
module.exports = advanceResults;
