const express = require('express');
const cors = require('cors');
const path = require('path');

const userRoutes = require('./Routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, '..', 'FrontEnd')));

// API routes
app.use('/users', userRoutes);

// Catch-all to serve index.html
app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'FrontEnd', 'index.html');
    console.log("Serving file from:", indexPath); // debug
    res.sendFile(indexPath);
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
