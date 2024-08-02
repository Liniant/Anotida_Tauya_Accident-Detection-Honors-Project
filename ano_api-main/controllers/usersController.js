const db = require('../config/database');

// Register a new user
exports.register = (req, res) => {
    const { email, password, name, surname, role, allergies, medical_insurance, emergency_contact } = req.body;
    const query = 'INSERT INTO Users (email, password, name, surname, role, allergies, medical_insurance, emergency_contact) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [email, password, name, surname, role, allergies, medical_insurance, emergency_contact], (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(201).send({ message: 'User registered successfully', userId: results.insertId });
    });
};

exports.mobileregister = (req, res) => {
    const { name,email, password, phone, role } = req.body;
    const query = 'INSERT INTO Users (name,email, password, phone, role) VALUES (?, ?, ?, ?,?)';

    const values = [name, email, password, phone, role];
    // Print the query and values for debugging
    console.log('Executing query:', query);
    console.log('With values:', values);
    db.query(query, [name,email, password, phone, role], (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(201).send({ message: 'User registered successfully', userId: results.insertId });
    });
};



// User login
exports.login = (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT id,email,emergency_contact,role,phone FROM Users WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        if (results.length === 0) {
            res.status(401).send({ message: 'Invalid credentials' });
            return;
        }
       // res.status(200).send(results);
        const user = results[0];
        res.status(200).send({
            id: user.id,
            email: user.email,
            role: user.role,
            emergency_contact: user.emergency_contact,
            phone: user.phone,
        });
    });
};

// Update user profile
exports.updateProfile = (req, res) => {
    const { id3 } = req.params;
    const { allergies, medical_insurance, emergency_contact,role,id } = req.body;
  //  console.log
    const query = 'UPDATE Users SET allergies = ?, medical_insurance = ?, emergency_contact = ?,role=? WHERE id = ?';
    db.query(query, [allergies, medical_insurance,emergency_contact,role, id], (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(200).send({ message: 'Profile updated successfully' });
    });
};

// Get user details by ID
exports.getUserById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Users WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        if (results.length === 0) {
            res.status(404).send({ message: 'User not found' });
            return;
        }
        res.status(200).send(results[0]);
    });
};

// Delete user by ID
exports.deleteUserById = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Users WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(200).send({ message: 'User deleted successfully' });
    });
};

// Get all users
exports.getAllUsers = (req, res) => {
    const query = 'SELECT * FROM Users';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(200).send(results);
    });
};
