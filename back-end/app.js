import express from 'express';

import databaseConnection from './database/index.js';


const app = express();
const port = 3001;


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});