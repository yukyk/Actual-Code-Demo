const express = require('express');
const router = express.Router();
const busController = require('../Controllers/busController');

router.post('/', busController.addBus);
router.get('/:id/booking', busController.getBusBookings);

module.exports = router;
