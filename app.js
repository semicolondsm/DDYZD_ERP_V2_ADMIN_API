const express = require('express');
const cors = require('cors');
require('dotenv').config();

var db = require('./models');
var club = require('./models/club');
var app = express();

app.use(cors());

app.get('/', (req, res) => {
    db.club_tbl.findAll().then((result) => {
        res.json(result);
    });
})

db.sequelize.sync().then( async () => {
    app.listen(3000, () => {
        console.log('server running on port 3000')
    });
})
