import express from 'express';
import 'dotenv/config';
import databasePool from './modules/database/database.js';


const app = express();

const PORT = process.env.NODE_PORT;


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
});