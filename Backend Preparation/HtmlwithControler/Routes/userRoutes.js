const express = require("express");
const router = express.Router();

const userController = require("../VIEW/Controller/userController");

// POST - Create user
router.post("/", userController.createUser);

module.exports = router;