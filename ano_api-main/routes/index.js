const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const accidentsController = require('../controllers/accidentsController');
const sensorDataController = require('../controllers/sensorDataController');
const notificationsController = require('../controllers/notificationsController');
const routesController = require('../controllers/routesController');

// User routes
router.post('/register', usersController.register);
router.post('/mobileregister', usersController.mobileregister);

router.post('/login', usersController.login);
router.put('/users/:id', usersController.updateProfile);
router.get('/users/:id', usersController.getUserById);
router.delete('/users/:id', usersController.deleteUserById);
router.get('/users', usersController.getAllUsers);

// Accident routes
router.post('/accidents', accidentsController.reportAccident);

router.post('/accidents2', accidentsController.reportAccident2);
router.put('/accidents/:id', accidentsController.updateStatus);
router.get('/accidents/:id', accidentsController.getAccidentDetails);
router.get('/accidents', accidentsController.getAllAccidents);
router.get('/accidents2', accidentsController.getAllAccidents2);
router.get('/accidents3', accidentsController.getAllAccidents3);

// Sensor data routes
router.post('/sensordata', sensorDataController.recordData);

// Notification routes
router.post('/notifications', notificationsController.sendNotification);

// Routes routes
router.post('/routes', routesController.addRoute);

module.exports = router;
