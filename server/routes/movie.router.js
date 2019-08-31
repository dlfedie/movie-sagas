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


module.exports = router;