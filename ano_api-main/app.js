require('dotenv').config();

//const accountSid = 'AC1160313e79d5dd90762d6551f21736f0';
//const authToken = 'c597d255ed2f5034fbd21b9c0ddf9759';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

//const accountSid = 'AC4c2054c6db9c5983340fff308435e297';
//const authToken = '704c0e0d53424828ea3aa2cf46172b0e';


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/database'); // Import database configuration
const routes = require('./routes');

const app = express();
const twilio = require('twilio');
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Connection
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// Assign database connection to global variable
global.db = db;

// Routes
app.use('/api', routes);

app.get('/index', (req, res) => {
    res.send('Welcome to Accident Response System API');
});
// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

app.post('/api/accidentsAttend', (req, res) => {
    const {id} = req.body;

    const query = 'UPDATE tblaccidents SET attended = 1 WHERE id = ?';

    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error updating accident attendance:', err);
            return res.status(500).json({error: 'Error updating accident attendance'});
        }

        if (result.affectedRows === 0) {
            return res.status(200).json({value:0});
        }

        return res.status(200).json({value: 1});

    });
});

app.get('/api/reportedAttended', (req, res) => {
    const query = 'SELECT * from reported where attended<>0';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error retrieving accident attendance:', err);
            return res.status(500).json({error: 'Error retrieving accident attendance'});
        }

        return res.status(200).json(results);
    });
});

///


app.get('/api/accidentsx', (req, res) => {
    const query ='SELECT t.id, t.user_id, t.latitude, t.longitude, t.completed, t.attended FROM tblaccidents t  WHERE t.attended <> 1';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(200).send(results);
    });
});

//
app.get('/api/reportedUnAttended', (req, res) => {
    const query = 'SELECT * from reported where attended=0';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error retrieving accident attendance:', err);
            return res.status(500).json({error: 'Error retrieving accident attendance'});
        }

        return res.status(200).json(results);
    });
});


app.post('/api/user_delete', (req, res) => {
    const {id3} = req.body;
    const { allergies, medical_insurance, emergency_contact,role,id } = req.body;

    console.log(req.body);
    const query = 'UPDATE tblaccidents SET attended = 1 WHERE id = ?';

    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error updating accident attendance:', err);
            return res.status(500).json({error: 'Error updating accident attendance'});
        }

        if (result.affectedRows === 0) {
            return res.status(200).json({value:0});
        }

        return res.status(200).json({value: 1});

    });
});

app.post('/api/reported', (req, res) => {
    const { name, phone, message,severity, report_time } = req.body;

    console.log(req.body);
    const query = `
        INSERT INTO reported (name, phone, message,severity, report_time)
        VALUES (?, ?, ?,?, ?)
    `;

    db.query(query, [name, phone, message, severity,report_time], (err, result) => {
        if (err) {
            console.error('Error inserting accident record:', err);
            return res.status(500).json({ error: 'Error inserting accident record' });
        }

        return res.status(200).json({ id: result.insertId });
    });
});



const client = twilio(accountSid, authToken);

app.post('/api/sms', async (req, res) => {
  try {
    const { body, from, to } = req.body;

    const message = await client.messages.create({
      body,
      from,
      to,
    });

    console.log(message.body);
    res.status(200).json(message);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error creating Twilio message' });
  }
});

app.post('/api/profile_update', (req, res) => {
    const { name, allergies, medical_insurance, emergency_contact, id } = req.body;

    console.log(req.body);
    const query = `
        UPDATE users
        SET name = ?, allergies = ?, medical_insurance = ?, emergency_contact = ?
        WHERE id = ?
    `;

    db.query(query, [name, allergies, medical_insurance, emergency_contact, id], (err, result) => {
        if (err) {
            console.error('Error updating accident record:', err);
            return res.status(500).json({ error: 'Error updating accident record' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Record not found' });
        }

        return res.status(200).json({ message: 'Record updated successfully' });
    });
});

app.post('/api/reset', (req, res) => {
    const { password, email } = req.body;

    console.log(req.body);
    const query = `
        UPDATE users
        SET password = ?
        WHERE email = ?
    `;

    db.query(query, [password, email], (err, result) => {
        if (err) {
            console.error('Error updating accident record:', err);
            return res.status(500).json({ error: 'Error updating accident record' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Record not found' });
        }

        return res.status(200).json({ message: 'Record updated successfully' });
    });
});