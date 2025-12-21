const db = require('../utils/util');

const addUser = (req, res) => {
    const { name, email } = req.body;

    const query = 'INSERT INTO Users (name, email) VALUES (?, ?)';

    db.execute(query, [name, email], (err) => {
        if (err) {
            return res.status(500).send("Error adding user");
        }
        res.status(201).send("User added successfully");
    });
};

const getUsers = (req, res) => {
    const query = 'SELECT * FROM Users';

    db.execute(query, (err, results) => {
        if (err) {
            return res.status(500).send("Error fetching users");
        }
        res.status(200).json(results);
    });
};

module.exports = { addUser, getUsers };