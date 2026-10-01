import express from 'express';
import cors from 'cors';
import { env } from './env.js';
import { connection } from './db.js';
import { moviesRouter } from './resources/movies.js';


const app = express();
const port = env.SERVE_PORT;


app.use(express.static('public'));

app.use(cors({
  origin: env.FE_ORIGIN
}));

app.use('/movies' , moviesRouter);

app.use((err, req, res, next ) => {
  console.error(err);
  res.status(500).json({ error: 'unexpected internal server error'});
});

app.use((req, res, next ) => {
  console.error(err);
  res.status(404).json({ error: 'page not found'});
});


app.listen(port, () => {
  console.log(`Movies app listening on port ${port}`);
});