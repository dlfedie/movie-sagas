//server requires
const express = require('express');
//pool require to talk to db
const pool = require('../modules/pool');
//router! because we route
const router = express.Router();

//routes
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

router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log('in specific ID GET:', id);
    const queryText = `SELECT "movies".id, "movies".title, array_agg("genres".name) AS "movie_genres", "movies".description FROM "movies"
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
            res.sendStatus(500);
        })
})


module.exports = router;