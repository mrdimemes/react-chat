import mysql from 'mysql';

import { host, userName, password, databaseName } from './config.js';


const databaseConnection = mysql.createConnection({
  host: host,
  user: userName,
  password: password,
  database: databaseName
});

export default databaseConnection;