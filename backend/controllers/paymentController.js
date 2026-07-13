exports.processPayment = (req, res) => {
    res.status(200).json({
        message: "Payment Successful"
    });
};

exports.getPaymentStatus = (req, res) => {
    res.status(200).json({
        message: "Payment Status Retrieved"
    });
};
