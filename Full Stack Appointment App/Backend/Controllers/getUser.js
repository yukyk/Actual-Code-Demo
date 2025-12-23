const userModel = require('../Models/userModel');

const getUsers = async (req, res) => {
    try {
        const users = await userModel.findAll();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).send("Error fetching users.");
    }
};

module.exports = getUsers;
