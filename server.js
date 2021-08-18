const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const route = require('./server/routes/router');
const connectDB = require('./server/database/db');

//express server
const app = express();

//dotenv file
dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080;

//morgan log requests
app.use(morgan('tiny'));

//MongoDb connection
connectDB();

//pass requests to body parser
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine
app.set('view engine', 'ejs');

//load router
app.use('/', route);

//load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));

app.listen(PORT, () => console.log(`Server is Running on Port ${PORT}`));
