import express from 'express';
import { env } from './env.js';
import { connection } from './db.js';
import { moviesRouter } from './resources/movies.js';


const app = express();
const port = env.SERVE_PORT;


app.use(express.static('public'));
app.use('/movies' , moviesRouter);
app.use((err, req, res, next ) => {
  console.error(err);
  res.status(500).json({ error: 'unexpected internal server error'});
});

app.listen(port, () => {
  console.log(`Movies app listening on port ${port}`);
});