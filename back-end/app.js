import express from 'express';
import 'dotenv/config';
import databaseConnection from './database/index.js';


const app = express();

const PORT = process.env.NODE_PORT;


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${PORT}`)
});