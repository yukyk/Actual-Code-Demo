const express = require('express');
const sequelize = require('./utils/util');

const userRoutes = require('./Routes/userRoutes');
const busRoutes = require('./Routes/busRoutes');
const bookingRoutes = require('./Routes/bookingRoutes');
require('./Models');


const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/buses', busRoutes);
app.use('/booking', bookingRoutes);

sequelize.sync({ force: true }).then(() => {
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
});