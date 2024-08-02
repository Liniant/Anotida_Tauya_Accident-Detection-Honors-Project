-- Create the database
CREATE DATABASE AccidentResponseSystem;

-- Use the database
USE AccidentResponseSystem;

-- Create the Users table
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    surname VARCHAR(255),
    role VARCHAR(255),
    allergies TEXT,
    medical_insurance TEXT,
    emergency_contact VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


-- Create the Accidents table
CREATE TABLE Accidents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    reporter_id INT,
    location VARCHAR(255) NOT NULL,
    severity ENUM('minor', 'moderate', 'severe') NOT NULL,
    photo VARCHAR(255),
    status ENUM('reported', 'confirmed', 'resolved', 'enroute') DEFAULT 'reported',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (reporter_id) REFERENCES Users(id)
);

-- Create the SensorData table
CREATE TABLE SensorData (
    id INT AUTO_INCREMENT PRIMARY KEY,
    driver_id INT,
    accelerometer_data JSON,
    decibel_data JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (driver_id) REFERENCES Users(id)
);

-- Create the Notifications table
CREATE TABLE Notifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    message TEXT NOT NULL,
    type ENUM('accident', 'route', 'emergency') NOT NULL,
    status ENUM('sent', 'read') DEFAULT 'sent',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- Create the Routes table
CREATE TABLE Routes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    accident_id INT,
    affected_route VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (accident_id) REFERENCES Accidents(id)
);

-- Create the EmergencyContacts table
CREATE TABLE EmergencyContacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    contact_name VARCHAR(255) NOT NULL,
    contact_number VARCHAR(255) NOT NULL,
    relationship VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);
