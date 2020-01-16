const express = require('express');
const mongoose = require('mongoose');
//const config = require('config');
require('dotenv/config');
const app = express();

var bodyParser = require('body-parser');
const http = require('http');
const normalizePort = require('normalize-port');
mongoose.connect('mongodb://localhost/nejreeDashBoard')
    .then(() => { console.log("coneect"); })
    .catch((err) => {
       
    });
//if (!config.get('jwtPrivateKey')){
// console.log('jwt is not defiend');
//process.exit(1);
//}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});
require('./Routes/user')(app);
require('./Routes/files')(app);
require('./Routes/upload')(app);
// set enviorment variable
const ports = normalizePort('3000' || process.env.port);
app.set('port', ports);
const server = http.createServer(app);
server.listen(ports);