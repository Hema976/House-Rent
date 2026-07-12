exports.addReview = (req, res) => {
  res.status(201).json({
    message: "Review Added Successfully"
  });
};

exports.getReviews = (req, res) => {
  res.status(200).json({
    message: "Reviews Retrieved Successfully"
  });
};

exports.deleteReview = (req, res) => {
  res.status(200).json({
    message: "Review Deleted Successfully"
  });
};
