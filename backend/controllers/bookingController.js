exports.createBooking = (req, res) => {
  res.status(201).json({
    message: "Booking Created Successfully"
  });
};

exports.getBookings = (req, res) => {
  res.status(200).json({
    message: "All Bookings Fetched Successfully"
  });
};

exports.cancelBooking = (req, res) => {
  res.status(200).json({
    message: "Booking Cancelled Successfully"
  });
};
