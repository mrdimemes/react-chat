const express = require('express');
const app = express();
const port = 3001;

const mysql = require('mysql');
const databaseConnection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'react_chat_database'
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});