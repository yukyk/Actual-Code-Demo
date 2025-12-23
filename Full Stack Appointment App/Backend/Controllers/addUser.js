const userModel = require('../Models/userModel');

const addUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        await userModel.create({ name, email });

        res.status(201).json({ message: "User added successfully" });
    } catch (err) {
        console.error("ADD USER ERROR:", err); // 👈 THIS WILL SHOW REAL ERROR
        res.status(500).json({ error: err.message });
    }
};

module.exports = addUser;
