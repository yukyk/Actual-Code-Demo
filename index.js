const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Yusufgitsharp@25321453',
    database: 'testdb'
});
connection.connect((err) => {
    if (err) {
        console.error("Connection failed:", err.message);
        return;
    }
    console.log("Connection established successfully.");

    const usersTable = `
        CREATE TABLE Users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255)
        )
    `;

    const busesTable = `
        CREATE TABLE Buses (
            id INT AUTO_INCREMENT PRIMARY KEY,
            busNumber VARCHAR(50),
            totalSeats INT,
            availableSeats INT
        )
    `;

    const bookingsTable = `
        CREATE TABLE Bookings (
            id INT AUTO_INCREMENT PRIMARY KEY,
            seatNumber INT
        )
    `;

    const paymentsTable = `
        CREATE TABLE Payments (
            id INT AUTO_INCREMENT PRIMARY KEY,
            amountPaid INT,
            paymentStatus VARCHAR(50)
        )
    `;

    connection.execute(usersTable);
    connection.execute(busesTable);
    connection.execute(bookingsTable);
    connection.execute(paymentsTable);

   
    console.log("Table created successfully.");
});

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});