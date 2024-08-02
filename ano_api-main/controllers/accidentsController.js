const db = require("../config/database");

// Report a new accident
exports.reportAccident = (req, res) => {
  const { reporter_id, location, severity, photo } = req.body;
  const query =
    "INSERT INTO Accidents (reporter_id, location, severity, photo) VALUES (?, ?, ?, ?)";
  db.query(query, [reporter_id, location, severity, photo], (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.status(201).send({
      message: "Accident reported successfully",
      accidentId: results.insertId,
    });
  });
};

// Report a new accident
exports.reportAccident2 = (req, res) => {
  const { user_id, latitude, longitude } = req.body;
  const query =
    "INSERT INTO tblaccidents (user_id, latitude, longitude) VALUES (?, ?, ?)";
  db.query(query, [user_id, latitude, longitude], (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.status(201).send({
      message: "Accident reported successfully",
      accidentId: results.insertId,
    });
  });
};

// Update accident status
exports.updateStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const query = "UPDATE Accidents SET status = ? WHERE id = ?";
  db.query(query, [status, id], (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.status(200).send({ message: "Accident status updated successfully" });
  });
};

// Get accident details
exports.getAccidentDetails = (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM Accidents WHERE id = ?";
  db.query(query, [id], (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    if (results.length === 0) {
      res.status(404).send({ message: "Accident not found" });
      return;
    }
    res.status(200).send(results[0]);
  });
};

// Get all accidents
exports.getAllAccidents = (req, res) => {
  const query = "SELECT * FROM Accidents";
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.status(200).send(results);
  });
};

exports.getAllAccidents2 = (req, res) => {
  //const query = 'SELECT * FROM tblaccidents';
  const query =
    'SELECT t.id, t.user_id, t.latitude, t.longitude, trim(COALESCE(e.emergency_contact,"N/A")) as contact_number, COALESCE(e.name,"N/A") as contact_name, t.completed, t.attended , CONCAT("http://www.google.com/maps?q=", t.latitude, ",", t.longitude) AS map_url  FROM tblaccidents t LEFT JOIN users e ON t.user_id = e.id WHERE t.attended <> 1';
  // const query ='SELECT t.id, t.user_id, t.latitude, t.longitude, t.completed, t.attended FROM tblaccidents t  WHERE t.attended <> 1';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.status(200).send(results);
  });
};

exports.getAllAccidents3 = (req, res) => {
  //const query = 'SELECT * FROM tblaccidents';
  // const query ='SELECT t.id, t.user_id, t.latitude, t.longitude, COALESCE(e.contact_number,"N/A") as contact_number, COALESCE(e.contact_name,"N/A") as contact_name, t.completed, t.attended , CONCAT("http://www.google.com/maps?q=", t.latitude, ",", t.longitude) AS map_url  FROM tblaccidents t LEFT JOIN emergencycontacts e ON t.user_id = e.user_id WHERE t.attended <> 1';
  //const query ='SELECT t.id, t.user_id, t.latitude, t.longitude, trim(COALESCE(e.contact_number,"NA")) as contactnumber, trim(COALESCE(e.contact_name,"NA")) as contactname, t.completed, t.attended  FROM tblaccidents t LEFT JOIN emergencycontacts e ON t.user_id = e.user_id WHERE t.attended <> 1';
  const query =
    'SELECT t.id, t.user_id, t.latitude, t.longitude,trim(COALESCE(e.emergency_contact,"N/A")) as contactnumber , t.completed, t.attended  FROM tblaccidents t LEFT JOIN users e ON t.user_id = e.id WHERE t.attended <> 1';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.status(200).send(results);
  });
};

// Update accident attendance
