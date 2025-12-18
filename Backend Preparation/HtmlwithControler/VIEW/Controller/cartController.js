const asyncHandler = require("../../middleware/asyncHandler");

exports.addToCart = asyncHandler(async (req, res) => {
  const { productId } = req.body;

  if (!productId) {
    const error = new Error("Product ID is required");
    error.statusCode = 400;
    throw error;
  }

  res.status(200).json({
    success: true,
    message: "Product added to cart",
  });
});
