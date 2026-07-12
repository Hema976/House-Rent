exports.addProperty = (req, res) => {
  res.status(201).json({
    message: "Property Added Successfully"
  });
};

exports.getAllProperties = (req, res) => {
  res.status(200).json({
    message: "All Properties Fetched Successfully"
  });
};

exports.getPropertyById = (req, res) => {
  res.status(200).json({
    message: "Property Details"
  });
};
