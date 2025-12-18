const express = require("express");
const router = express.Router();
const productController = require("../VIEW/Controller/productController");

router.get("/products", productController.getProductsPage);

module.exports = router;
