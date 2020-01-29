DROP DATABASE IF EXISTS wildcircus_database;
CREATE DATABASE wildcircus_database;
USE wildcircus_database;
CREATE TABLE events
(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(150) NOT NULL,
  article VARCHAR(400)NOT NULL,
  creation_date timestamp NOT NULL default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP
);

INSERT INTO events 
(title, article)
VALUES
('Test1','je suis content je suis content');


