const express = require ('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const homeRouter = require('./routers/home.route.js');
const rentalsRouter = require ('./routers/rentals.route.js');
// const salesRouter = require ('./routers/sales.route.js');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// static routes
app.use(express.static('server/public'));

// setup app routes
app.use('/home', homeRouter);
app.use('/rentals', rentalsRouter);
// app.use('/sales', salesRouter);



app.listen(PORT, () => {
    console.log('App is running on port:', PORT);
})