const { Bus, Booking, User } = require('../Models');

/* ---------------- ADD BUS ---------------- */
const addBus = async (req, res) => {
  try {
    const bus = await Bus.create(req.body);
    res.status(201).json(bus);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* -------- GET BOOKINGS FOR A BUS -------- */
const getBusBookings = async (req, res) => {
  try {
    const busId = req.params.id;

    const bookings = await Booking.findAll({
      where: { BusId: busId },
      attributes: ['id', 'seatNumber'],
      include: [
        {
          model: User,
          attributes: ['name', 'email']
        }
      ]
    });

    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addBus,
  getBusBookings
};
