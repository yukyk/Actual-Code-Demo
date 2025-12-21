const express = require('express');
const router = express.Router();
const { addUser, getUsers } = require('../Controllers/userController');

router.post('/users', addUser);
router.get('/users', getUsers);

module.exports = router;
