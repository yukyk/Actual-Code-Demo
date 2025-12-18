const asyncHandler = require("../../middleware/asyncHandler");

exports.createUser = asyncHandler(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    const error = new Error("Email is required");
    error.statusCode = 400;
    throw error;
  }

  res.status(201).json({
    success: true,
    message: "User created successfully",
  });
});
