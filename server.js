const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promiste = global.Promise;
mongoose.createConnection(config.uri, (err) => {
    if(err){
        console.log('Could not connect to database: ', err)
    }
    else{
        console.log('Connected to database: ' + config.db)
    }
});

app.use(express.static(__dirname + '/client/dist/'));

app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8000, () => {
    console.log('Listening on port 8000');
});