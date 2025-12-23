const express = require('express');
const sequelize = require('./utils/util');

const userRoutes = require('./Routes/userRoutes');
const busRoutes = require('./Routes/busRoutes');

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/buses', busRoutes);
sequelize.sync({force:true}).then(() => {
    app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

}).catch((err) => {
    console.log(err);
});

sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error(err));