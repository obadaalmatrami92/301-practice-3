'use strict';
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const server = express();

server.use(cors());




server.get('/', (req, res) => {

    res.status(200).send('Home-Page');

});

server.get('/data', (req, res) => {

    let colors = ["color", "black",
        "category", "hue",
        "type", "primary"
    ];
    res.status(200).json(colors);

});


server.get('*', (req, res) => {

    res.status(404).send('Not Found *');

});

server.listen(PORT, () => console.log(`server listening on ${PORT}`));