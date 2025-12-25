const express = require('express');
const router = express.Router();

const {
  createBooking,
  getAllBookings
} = require('../Controllers/bookingController');

router.post('/', createBooking);        
router.get('/', getAllBookings);      
module.exports = router;
