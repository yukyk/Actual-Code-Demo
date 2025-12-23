const express = require('express');
const router = express.Router();

const addUser = require('../Controllers/addUser');
const updateUser = require('../Controllers/updateUser');
const deleteUser = require('../Controllers/deleteUser');
const getUsers = require('../Controllers/getUser');

router.post('/', addUser);
router.get('/', getUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
