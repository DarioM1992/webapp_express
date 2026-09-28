import express from 'express';
import { env } from './env.js';


const app = express();
const port = env.SERVE_PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Movies app listening on port ${port}`);
});