const express = require ('express');
const router = express.Router();

// PG Set-up
const pg = require ('pg')
const Pool = pg.Pool;
const config = {
    database: 'real_estate',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 10000
}

const pool = new Pool(config);

pool.on('connect', () => {
    console.log('postgresql connected');
});

pool.on('error', (error) =>{
    console.log('Error connecting to database:', error);
});

// GET
router.get('/', function (req,res) {
    console.log('in rentals GET route');
    //query for DB
    const query = 'SELECT * FROM "listings" WHERE "type" = $1;';
    pool.query(query, ['rent']).then((results)=>{
        console.log(results)
        res.send(results.rows);
    }).catch((error)=>{
        console.log('Error in rentals GET', error);
        res.sendStatus(500);
    })
})

//DELETE
router.delete('/:id', (req,res)=>{
    console.log('In delete Route');
    const idToDelete = req.params.id;
console.log('deleting', idToDelete);
    //Query for DB
    const query = 'DELETE FROM "listings" WHERE "id" = $1;';
    pool.query(query, [idToDelete]).then((results)=>{
        res.sendStatus(201);
    }).catch((error)=>{
        console.log('error in Rentals delete route:', error);
        res.sendStatus(500);        
    });
});//end DELETE

module.exports = router;
