const mysql = require('mysql');
const dbConfig = require('./config');

// Create a connection pool for MySQL
const connection = mysql.createPool(dbConfig);

connection.getConnection((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

module.exports = connection;
