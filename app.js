'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
var cors = require('cors');

const listData = require('./data/listData');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app);

function createListName(){
    //go through the list and write each
    //name to a csv file

    let ln = 'list,\n';
    for (const prop in listData) {
        if(!ln){
            ln = prop + ',\n';
        }else{
            ln = ln + prop + ',\n';
        }
    }
    fs.writeFileSync('./jMeter/list.csv', ln);

}
createListName();
const server = app.listen(3000, function () {
    console.log('Listening on port %s...', server.address().port);
});

module.exports = app;
