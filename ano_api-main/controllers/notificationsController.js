const db = require('../config/database');

// Send a notification
exports.sendNotification = (req, res) => {
    const { user_id, message, type } = req.body;
    const query = 'INSERT INTO Notifications (user_id, message, type) VALUES (?, ?, ?)';
    db.query(query, [user_id, message, type], (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(201).send({ message: 'Notification sent successfully' });
    });
};
