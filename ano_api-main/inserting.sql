INSERT INTO users (email, password, role) VALUES
('john.doe@example.com', 'password1', 'driver'),
('jane.smith@example.com', 'password2', 'driver'),
('michael.johnson@example.com', 'password3', 'driver'),
('emily.williams@example.com', 'password4', 'driver'),
('james.brown@example.com', 'password5', 'driver'),
('robert.jones@example.com', 'password6', 'police'),
('david.garcia@example.com', 'password7', 'police'),
('mary.miller@example.com', 'password8', 'ambulance'),
('linda.davis@example.com', 'password9', 'ambulance'),
('william.rod@example.com', 'password10', 'firefighter'),
('charles.mar@example.com', 'password11', 'firefighter'),
('sarah.hernandez@example.com', 'password12', 'user'),
('olivia.lopez@example.com', 'password13', 'user'),
('daniel.gonzalez@example.com', 'password14', 'user'),
('elizabeth.wilson@example.com', 'password15', 'user');


  
INSERT INTO Accidents (reporter_id, location, severity, photo, status)
VALUES
(13, 'Main Street, City A', 'severe', 'accident1.jpg', 'confirmed'),
(14, 'Broadway Avenue, City B', 'moderate', 'accident2.jpg', 'confirmed'),
(15, 'Park Road, City C', 'minor', 'accident3.jpg', 'resolved'),
(12, 'Highway 101, City D', 'severe', 'accident4.jpg', 'enroute'),
(11, 'Oak Street, City E', 'moderate', 'accident5.jpg', 'reported'),
(10, 'Elm Avenue, City F', 'minor', 'accident6.jpg', 'reported'),
(9, 'Maple Drive, City G', 'severe', 'accident7.jpg', 'reported'),
(8, 'Pine Lane, City H', 'moderate', 'accident8.jpg', 'reported'),
(7, 'Cedar Court, City I', 'minor', 'accident9.jpg', 'reported'),
(6, 'Aspen Circle, City J', 'severe', 'accident10.jpg', 'reported'),
(5, 'Juniper Place, City K', 'moderate', 'accident11.jpg', 'reported'),
(4, 'Birch Street, City L', 'minor', 'accident12.jpg', 'reported'),
(3, 'Spruce Avenue, City M', 'severe', 'accident13.jpg', 'reported'),
(2, 'Fir Road, City N', 'moderate', 'accident14.jpg', 'reported'),
(1, 'Willow Lane, City O', 'minor', 'accident15.jpg', 'reported');


INSERT INTO SensorData (driver_id, accelerometer_data, decibel_data)
VALUES
(1, '{"x": 0.1, "y": 0.2, "z": 0.3}', '{"level": 85.5}'),
(2, '{"x": 0.2, "y": 0.3, "z": 0.4}', '{"level": 90.2}'),
(3, '{"x": 0.3, "y": 0.4, "z": 0.5}', '{"level": 88.0}'),
(4, '{"x": 0.4, "y": 0.5, "z": 0.6}', '{"level": 91.8}'),
(5, '{"x": 0.5, "y": 0.6, "z": 0.7}', '{"level": 87.3}'),
(6, '{"x": 0.6, "y": 0.7, "z": 0.8}', '{"level": 89.9}'),
(7, '{"x": 0.7, "y": 0.8, "z": 0.9}', '{"level": 86.1}'),
(8, '{"x": 0.8, "y": 0.9, "z": 1.0}', '{"level": 92.4}'),
(9, '{"x": 0.9, "y": 1.0, "z": 1.1}', '{"level": 84.7}'),
(10, '{"x": 1.0, "y": 1.1, "z": 1.2}', '{"level": 93.6}');


INSERT INTO Notifications (user_id, message, type)
VALUES
(1, 'Accident reported nearby.', 'accident'),
(2, 'Route affected due to accident.', 'route'),
(3, 'Emergency alert: fire reported.', 'emergency'),
(4, 'Accident confirmed in your area.', 'accident'),
(5, 'Route diverted due to accident.', 'route'),
(6, 'Emergency alert: medical emergency.', 'emergency'),
(7, 'Accident reported nearby.', 'accident'),
(8, 'Route affected due to accident.', 'route'),
(9, 'Emergency alert: flood reported.', 'emergency'),
(10, 'Accident confirmed in your area.', 'accident'),
(11, 'Route diverted due to accident.', 'route'),
(12, 'Emergency alert: earthquake detected.', 'emergency'),
(13, 'Accident reported nearby.', 'accident'),
(14, 'Route affected due to accident.', 'route'),
(15, 'Emergency alert: tornado warning.', 'emergency');

INSERT INTO Routes (accident_id, affected_route)
VALUES
(1, 'Highway 1'),
(2, 'Interstate 5'),
(3, 'State Route 101'),
(4, 'US Route 50'),
(5, 'County Road 30'),
(6, 'Main Street'),
(7, 'Broadway Avenue'),
(8, 'Park Road'),
(9, 'Highway 101'),
(10, 'Oak Street'),
(11, 'Elm Avenue'),
(12, 'Maple Drive'),
(13, 'Pine Lane'),
(14, 'Cedar Court'),
(15, 'Aspen Circle');

INSERT INTO EmergencyContacts (user_id, contact_name, contact_number, relationship)
VALUES
(1, 'Emergency Contact 1', '111-222-3333', 'Spouse'),
(2, 'Emergency Contact 2', '222-333-4444', 'Parent'),
(3, 'Emergency Contact 3', '333-444-5555', 'Sibling'),
(4, 'Emergency Contact 4', '444-555-6666', 'Friend'),
(5, 'Emergency Contact 5', '555-666-7777', 'Relative'),
(6, 'Emergency Contact 6', '666-777-8888', 'Colleague'),
(7, 'Emergency Contact 7', '777-888-9999', 'Neighbor'),
(8, 'Emergency Contact 8', '888-999-0000', 'Guardian'),
(9, 'Emergency Contact 9', '999-000-1111', 'Partner'),
(10, 'Emergency Contact 10', '000-111-2222', 'Spouse'),
(11, 'Emergency Contact 11', '111-222-3333', 'Parent'),
(12, 'Emergency Contact 12', '222-333-4444', 'Sibling'),
(13, 'Emergency Contact 13', '333-444-5555', 'Friend'),
(14, 'Emergency Contact 14', '444-555-6666', 'Relative'),
(15, 'Emergency Contact 15', '555-666-7777', 'Colleague');






