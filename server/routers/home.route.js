
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

router.post('/', (req, res) => {
    console.log('/home POST');
    console.log(req.body);
    let listingFromClient = req.body;
    const query = 'INSERT INTO "listings" ("cost", "sqft", "type", "city", "image_path") VALUES($1, $2, $3, $4, $5);';
    pool.query(query, [listingFromClient.cost, listingFromClient.sqft, listingFromClient.type, listingFromClient.city, listingFromClient.image_path]).then((results)=>{
        res.sendStatus(201); // All OK
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500); // Send back an error to client
    });
});



module.exports = router;
