const express = require('express');
const router = express.Router();
const busController = require('../Controllers/busController');

router.post('/', busController.addBus);
router.get('/available/:seats', busController.getAvailableBuses);

module.exports = router;
