const User = require('../Models/userModel');

const addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

module.exports ={
    addUser,
    getUsers
}
