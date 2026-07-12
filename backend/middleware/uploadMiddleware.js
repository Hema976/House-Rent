const uploadMiddleware = (req, res, next) => {
  console.log("Upload Middleware");
  next();
};

module.exports = uploadMiddleware;
