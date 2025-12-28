const express = require('express');
const cors = require('cors');
const path = require('path');

const sequelize = require('./Utils/util');
const blogRoute = require('./Routes/blogRoute');

const app = express();

app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, '..', 'Frontend')));

// Blog API routes
app.use('/blogs', blogRoute);

// Serve index.html on root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'Frontend', 'index.html'));
});

// Sync DB and start server
sequelize.sync()
  .then(() => {
    console.log("Database synced");
    app.listen(3000, () => {
      console.log("Server running at http://localhost:3000");
    });
  })
  .catch(err => {
    console.error("DB sync error:", err);
  });
