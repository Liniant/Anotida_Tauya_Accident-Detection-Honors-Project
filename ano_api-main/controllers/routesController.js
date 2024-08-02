const db = require('../config/database');

// Add a route
exports.addRoute = (req, res) => {
    const { accident_id, affected_route } = req.body;
    const query = 'INSERT INTO Routes (accident_id, affected_route) VALUES (?, ?)';
    db.query(query, [accident_id, affected_route], (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(201).send({ message: 'Route added successfully' });
    });
};
