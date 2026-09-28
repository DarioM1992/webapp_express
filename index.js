import express from 'express';
import { env } from './env.js';
import { connection } from './db.js';


const app = express();
const port = env.SERVE_PORT;

app.get('/', async(req, res) => {
  const [results] = await connection.query('select * from movies');
  res.json(results);
});

app.listen(port, () => {
  console.log(`Movies app listening on port ${port}`);
});