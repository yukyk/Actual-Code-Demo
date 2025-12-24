const express = require('express');
const sequelize = require('./Utils/util');

const studentRoutes = require('./Routes/studentRoutes');
const courseRoutes = require('./Routes/courseRoutes');

require('./models'); // load associations

const app = express();
app.use(express.json());

app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

app.get('/', (req, res) => {
    res.send('Student Management API Running');
});

sequelize.sync({ alter: true }).then(() => {
    app.listen(3000, () => {
        console.log('Server running on http://localhost:3000');
    });
});
