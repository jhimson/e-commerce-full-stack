const notFound = (req, res, next) => {
  const error = new Error(`Route Not found - ${req.originalUrl}`);
  error.status = 404;
  next(error);
};

const errorHandler = (error, req, res, next) => {
  // console.log(error.message, error.status);
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    error: { message: error.message, status: error.status },
    stack: process.env.NODE_ENV !== "production" ? null : error.stack,
  });
};

module.exports = { notFound, errorHandler };
