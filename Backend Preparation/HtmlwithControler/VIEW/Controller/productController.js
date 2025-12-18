const asyncHandler = require("../../middleware/asyncHandler");

exports.getProducts = asyncHandler(async (req, res) => {
  const products = []; // assume DB fetch

  if (!products.length) {
    const error = new Error("No products found");
    error.statusCode = 404;
    throw error;
  }

  res.status(200).json({
    success: true,
    data: products,
  });
});

exports.createProduct = asyncHandler(async (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    const error = new Error("Name and price are required");
    error.statusCode = 400;
    throw error;
  }

  const newProduct = { name, price };

  res.status(201).json({
    success: true,
    data: newProduct,
  });
});
