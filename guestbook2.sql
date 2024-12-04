CREATE DATABASE guestbook2;

USE guestbook2;

DROP TABLE IF EXISTS guestbook2;

CREATE TABLE entries (
	id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(250),
    last_name VARCHAR(250),
    job_title VARCHAR(250),
    company VARCHAR(250),
    linkedin VARCHAR(250),
    email VARCHAR(250),
    meet VARCHAR(250),
    other VARCHAR(250),
    message VARCHAR(1000),
    mailingList VARCHAR(50),
    format VARCHAR(50),
    created TIMESTAMP DEFAULT NOW()
);
    
INSERT INTO entries 
(first_name, last_name, job_title, company, linkedin, email, meet, other, message, mailingList, format) 
VALUES 
('John', 'Doe', 'Engineer', 'Google', 'https://linkedin.com/in/profile', 'name@gmail.com', 'in person', 'other', 'choose', 'yes', 'email');

    
SELECT * FROM entries;