//server requires
const express = require('express');
//pool require to talk to db
const pool = require('../modules/pool');
//router! because we route
const router = express.Router();

//routes

//basic GET route for main page. to get all movies.
router.get('/', (req, res) => {
    console.log('in moives router GET');
    
    //go get all of our movies in the db. default is to not add categories on main
    const queryText = `SELECT * FROM "movies" ORDER BY "title" ASC;`;
    pool.query(queryText)
        .then(result => {
            console.log('result from DB of GET', result.rows);
            
            res.send(result.rows)
        }).catch(err => {
            console.log('error movies router GET', err);
            //send a server error 
            res.sendStatus(500);
        })
})

//specific GET route to get a particular movie's info, including the genres.
//this uses joins and array_agg to get those genres in one box on the return.
router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log('in specific ID GET:', id);
    const queryText = `SELECT "movies".id, "movies".title, "movies".poster, array_agg("genres".name) AS "movie_genres", "movies".description FROM "movies"
                    JOIN "movies_genres" ON "movies".id = "movies_genres".movies_id
                    JOIN "genres" ON "movies_genres".genres_id = "genres".id
                    WHERE "movies".id = $1
                    GROUP BY "movies".id;`;
    pool.query(queryText, [id])
        .then(result => {
            console.log('result from specific ID GET', result.rows);
            //getting rows plural back, only need to send the first
            res.send(result.rows[0])
        }).catch(err => {
            console.log('error in specific ID GET', err);
            //send back server error
            res.sendStatus(500);
        })
})

//PUT route to edit the title and description of a movie.p
router.put('/', (req, res) => {
    const updatedMovie = req.body;
    console.log('in PUT request, here is data:', updatedMovie);
    const queryText = `UPDATE "movies"
                        SET "title" = $1, "description" = $2
                        WHERE "id" = $3;`;
    pool.query(queryText, [updatedMovie.title, updatedMovie.description, updatedMovie.id])
        .then(result => {
            //send back thumbs up if PUT works
            res.sendStatus(201);
        }).catch(err => {
            console.log('error in PUT request (movie edit):', err);
            //send back server error if errors
            res.sendStatus(500);
        })
    
})


module.exports = router;