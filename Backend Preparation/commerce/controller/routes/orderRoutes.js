const express = require('express');
const router = express.Router();

const {
  getAllOrders,
  getOrderById,
  addOrder
} = require('../orderController');

router.get('/', getAllOrders);
router.get('/:id', getOrderById);
router.post('/', addOrder);

module.exports = router;
