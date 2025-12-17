const express = require('express');
const router = express.Router();

const {
  getCartByUserId,
  addToCart
} = require('../cartController');

router.get('/:userId', getCartByUserId);
router.post('/:userId', addToCart);

module.exports = router;
