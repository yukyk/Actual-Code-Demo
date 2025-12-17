const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  getProductById,
  addProduct
} = require('../productController');

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', addProduct);

module.exports = router;
