import express from 'express';
import { connection } from '../db.js';

export const moviesRouter = express.Router();

moviesRouter.get('/', async (req,res) => {
    const [results] = await connection.query('select * from movies');
    res.json(results);
});

moviesRouter.get('/:id', async (req,res) => {
    const id = Number(req.params.id);

if (Number.isNaN(id)) {
    res.status(400).json({ error : ' invalid param'});
    return;
} 

    const [[movie]] = await connection.query('select * from movies where id = ?', [id]);
    if (movie === undefined) {
        res.status(404).json({ error: 'movie not found' });
        return;
    }

    const [reviewResults] = await connection.query(' select * from reviews where movie_id = ?', [id]);



    res.json({...movie, reviews: reviewResults});
});