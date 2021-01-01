const express = require('express');
const cors = require('cors');
require('dotenv').config();

var db = require('./models');
var app = express();

app.use(cors());

app.get('/', (req, res) => {
    db.sequelize.query("SELECT club.name, title FROM club_tag INNER JOIN club ON club_tag.club_id = club.id INNER JOIN tag ON club_tag.tag_id = tag.id;").then((results, metadata) => {
        res.json(results[0]);
    })
})

db.sequelize.sync().then( async () => {
    app.listen(3000, () => {
        console.log('server running on port 3000')
    });
})
