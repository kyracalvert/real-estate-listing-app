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
router.get('/rentals', function (req,res) {
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

module.exports = router;
