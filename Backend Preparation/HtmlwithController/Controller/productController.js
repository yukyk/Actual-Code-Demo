const path = require("path");

const getProducts = (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "view", "product.html")
  );
};

const postProducts = (req, res) => {
  console.log("Received:", req.body);

  res.json({
    value: req.body.productName
  });
};

module.exports = {
  getProducts,
  postProducts
};
