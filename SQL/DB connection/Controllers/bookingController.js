const Booking = require('../Models/bookingModel');
const User = require('../Models/userModel');
const Bus = require('../Models/busModel');

const createBooking = async (req, res) => {
  try {
    const { userId, busId, seatNumber } = req.body;

    if (!userId || !busId || !seatNumber) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const booking = await Booking.create({
      userId,
      busId,
      seatNumber
    });

    res.status(201).json(booking);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      include: [
        {
          model: User,
          attributes: ['name', 'email']
        },
        {
          model: Bus,
          attributes: ['busNumber']
        }
      ]
    });

    res.json(bookings);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createBooking,
  getAllBookings
};
