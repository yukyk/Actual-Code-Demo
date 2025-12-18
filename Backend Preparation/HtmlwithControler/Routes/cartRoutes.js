const express = require("express");
const router = express.Router();

const cartController = require("../VIEW/Controller/cartController");

// POST - Add product to cart
router.post("/", cartController.addToCart);

module.exports = router;
