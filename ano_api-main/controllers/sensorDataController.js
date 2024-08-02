const db = require('../config/database');

// Record sensor data
exports.recordData = (req, res) => {
    const { driver_id, accelerometer_data, decibel_data } = req.body;
    const query = 'INSERT INTO SensorData (driver_id, accelerometer_data, decibel_data) VALUES (?, ?, ?)';
    db.query(query, [driver_id, accelerometer_data, decibel_data], (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(201).send({ message: 'Sensor data recorded successfully' });
    });
};
