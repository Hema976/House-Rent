exports.makePayment = (req, res) => {
  res.status(200).json({
    message: "Payment Successful"
  });
};

exports.paymentStatus = (req, res) => {
  res.status(200).json({
    message: "Payment Status Retrieved"
  });
};
