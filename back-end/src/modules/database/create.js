import mysql from 'mysql';
import 'dotenv/config';


// This file is not the part of application!
// Run it via node to create MySQL database and tables


const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

connection.connect((err) => {if (err) {throw (err)}});

connection.query(
  `CREATE DATABASE ${process.env.DB_NAME}`,
  (err) => {if (err) {throw (err)}}
);
connection.query(
  `USE ${process.env.DB_NAME}`,
  (err) => {if (err) {throw (err)}}
);
connection.query(
  'CREATE TABLE users ( ' + 
  'id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, ' +
  'email VARCHAR(50) NOT NULL, ' +
  'password VARCHAR(44) NOT NULL, ' +
  'salt VARCHAR(' + process.env.USER_SALT_LEN + ') NOT NULL, ' +
  'name VARCHAR(50) NOT NULL ' +
  ')',
  (err) => {if (err) {throw (err)}}
);

connection.end((err) => {if (err) {throw (err)}});