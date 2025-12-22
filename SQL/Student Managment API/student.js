const express = require('express');
const db = require('./Utils/util');
const studentRoutes = require('./Routes/studentRoutes');
const app = express();


app.use(express.json());

app.use('/', studentRoutes);


app.get('/', (req, res) => {
    res.send("Hello world");
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});