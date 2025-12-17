const getAllOrders = (req, res) => {
  res.send('Fetching all orders');
};

const getOrderById = (req, res) => {
  res.send(`Fetching order with ID: ${req.params.id}`);
};

const addOrder = (req, res) => {
  res.send('Adding a new order');
};

module.exports = {
  getAllOrders,
  getOrderById,
  addOrder
};
