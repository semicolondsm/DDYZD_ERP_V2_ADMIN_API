const express = require('express');
const cors = require('cors');
require('dotenv').config();

var db = require('./models');
var club = require('./models/club');
var app = express();

app.use(cors());

app.get('/', (req, res) => {
    let club_arr = [];
    db.club_tbl.findAll().then((result) => {

        for(let i = 0; i < result.length; i++){
            club_arr.push({
                name: result[i].name
            });
        }
        console.log(club_arr);
        res.json(club_arr);
    });
})

db.sequelize.sync().then( async () => {
    app.listen(3000, () => {
        console.log('server running on port 3000')
    });
})
