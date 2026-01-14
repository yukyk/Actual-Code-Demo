const { Sequelize } = require('sequelize');

// Database configuration
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST || '127.0.0.1',
    database: process.env.DB_NAME || 'appointment_app',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'YusufgitSharp@25321453',
    logging: false, // Set to console.log to see SQL queries
    define: {
        timestamps: true, // Automatically adds createdAt and updatedAt
        underscored: false
    }
});

// Test database connection
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = { sequelize, testConnection };
