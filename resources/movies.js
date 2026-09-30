import express from 'express';
import { connection } from '../db.js';

export const moviesRouter = express.Router();

moviesRouter.get('/', async (req,res) => {
    let results;

    try{
        const sql = 'select movies.*, round(avg(reviews.vote)) avarage_review from movies left join reviews on reviews.movie_id = movies.id group by movies.id';
        [results] = await connection.query(sql); 
    }
    catch(err) {
    console.error(' queryin movies index failed' , err);
    res.status(500).json ({error: 'queryin movies index failed'});
    
    return;
    }
    res.json(results);
});

moviesRouter.get('/:id', async (req,res) => {
    const id = Number(req.params.id);

if (Number.isNaN(id)) {
    res.status(400).json({ error : 'invalid param'});
    return;
} 

let movie , reviewResults;

try{    
[[movie]] = await connection.query('select * from movies where id = ?', [id]);
}   

catch (err) {
    console.error(' queryin movies detail failed' , err);
    res.status(500).json ({error: 'queryin movies detail failed'});
    
    return;
}

if (movie === undefined) {
        res.status(404).json({ error: 'movie not found' });
        return;
    }
try{
[reviewResults] = await connection.query(' select * from reviews where movie_id = ?', [id]);
}

catch (err) {
    console.error(' queryin movies review failed' , err);
    res.status(500).json ({error: 'queryin movies review failed'});
    
    return;
}

res.json({...movie, reviews: reviewResults});
});