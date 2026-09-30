import express from 'express';
import { env } from './env.js';
import { connection } from './db.js';
import { moviesRouter } from './resources/movies.js';


const app = express();
const port = env.SERVE_PORT;


app.use(express.static('public'));
app.use('/movies' , moviesRouter);

app.listen(port, () => {
  console.log(`Movies app listening on port ${port}`);
});