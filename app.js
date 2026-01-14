const express = require("express");
const path = require("path");
const { sequelize, testConnection } = require("./Full Stack Project/Models/database");
const User = require("./Full Stack Project/Models/User");
const authRoutes = require("./Full Stack Project/Routes/authRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "Full Stack Project", "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Full Stack Project", "View", "login.html"));
});

app.get("/login.html", (req, res) => {
    res.sendFile(path.join(__dirname, "Full Stack Project", "View", "login.html"));
});

app.get("/signup.html", (req, res) => {
    res.sendFile(path.join(__dirname, "Full Stack Project", "View", "signup.html"));
});

// Auth routes
app.use("/auth", authRoutes);

// Initialize database and start server
const startServer = async () => {
    try {
        // Test database connection
        await testConnection();
        
        // Sync database (creates tables if they don't exist)
        await sequelize.sync({ alter: true });
        console.log("Database synchronized successfully.");
        
        // Start server
        app.listen(3000, () => {
            console.log("Server running at http://localhost:3000");
        });
    } catch (error) {
        console.error("Error starting server:", error);
        process.exit(1);
    }
};

startServer();
