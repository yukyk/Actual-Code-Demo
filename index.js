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

    const creationQuery = `create table students(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(20) NOT NULL,
        email VARCHAR(20)
    )`
    connection.execute(creationQuery, (err) => {
        if (err) {
            console.log("Error creating table:", err.message);
            connection.end();
            return; ''
        }
        console.log("Table created successfully.");
    });
});

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});