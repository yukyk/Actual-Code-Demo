const db = require('../utils/util');


const addBus = (req, res) => {
    const { busNumber, totalSeats, availableSeats } = req.body;

    const query = `
        INSERT INTO Buses (busNumber, totalSeats, availableSeats)
        VALUES (?, ?, ?)
    `;

    db.execute(query, [busNumber, totalSeats, availableSeats], (err) => {
        if (err) {
            return res.status(500).send("Error adding bus");
        }
        res.status(201).send("Bus added successfully");
    });
};

const getAvailableBuses = (req, res) => {
    const { seats } = req.params;

    const query = `
        SELECT * FROM Buses WHERE availableSeats > ?
    `;

    db.execute(query, [seats], (err, results) => {
        if (err) {
            return res.status(500).send("Error fetching buses");
        }
        res.status(200).json(results);
    });
};

module.exports = { addBus, getAvailableBuses };
