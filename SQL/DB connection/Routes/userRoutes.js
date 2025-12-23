const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

router.post('/', userController.addUser);
router.get('/', userController.getUsers);

module.exports = router;
