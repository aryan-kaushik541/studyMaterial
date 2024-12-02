const db = require('./db');
const bcrypt = require('bcrypt');

// Register a new user
async function registerUser(email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users (email, password_hash) VALUES (?, ?)';
    db.query(query, [email, hashedPassword], (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            return;
        }
        console.log('User registered successfully with ID:', result.insertId);
    });
}

module.exports = { registerUser };
