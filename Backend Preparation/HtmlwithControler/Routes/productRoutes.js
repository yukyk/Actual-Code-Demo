const express = require("express");
const router = express.Router();

const productController = require("../VIEW/Controller/productController");

// GET - Get all products
router.get("/", productController.getProducts);

// POST - Create product
router.post("/", productController.createProduct);

module.exports = router;