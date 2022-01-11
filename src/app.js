const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const routes = require('./frameworks/expressSpecific/routes');

const API_PREFIX = process.env.API_PREFIX || '/api/v1';

const dependencies = require('./config/dependencies');

//Export some object
module.exports = {
    //Start function which starts our server
    start: () => {
        //Middlewares section
        app.use(express.json());
        app.use(express.urlencoded({
            extended: true
        }))

        // Routes
        // TODO: dd dependencies to the file
        app.use(API_PREFIX, routes(dependencies))

        // Common Error handler

        app.listen(PORT, () => {
            console.log(`Our server is running under port ${PORT}`);
        })
    }
}