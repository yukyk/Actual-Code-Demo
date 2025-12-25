const { User, Booking, Bus } = require('../Models');


const addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const getUserBookings = async (req, res) => {
  try {
    const userId = req.params.id;

    const bookings = await Booking.findAll({
      where: { UserId: userId },
      attributes: ['id', 'seatNumber'],
      include: [
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
  addUser,
  getUsers,
  getUserBookings
};
