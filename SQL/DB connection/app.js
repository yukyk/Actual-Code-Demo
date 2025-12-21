const express = require('express');
const app = express();

app.use(express.json());

const userRoutes = require('./Routes/userRoutes');
const busRoutes = require('./Routes/busRoutes');

app.use(userRoutes);
app.use(busRoutes);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});