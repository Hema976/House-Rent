exports.registerUser = (req, res) => {
  res.status(201).json({
    message: "User Registered Successfully"
  });
};

exports.loginUser = (req, res) => {
  res.status(200).json({
    message: "User Login Successfully"
  });
};
