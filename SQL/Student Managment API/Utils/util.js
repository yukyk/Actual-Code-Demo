const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Yusufgitsharp@25321453',
    database: 'testdb'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.message);
        return;
    }
    console.log('Database connected successfully');

    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS student (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255) UNIQUE,
            age INT
        )
    `;

    db.execute(createTableQuery, (err) => {
        if (err) {
            console.error('Error creating students table:', err.message);
        } else {
            console.log('Students table ready');
        }
    });
});

module.exports = db;