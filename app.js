const express = require('express');
const cors = require('cors');
require('dotenv').config();

var db = require('./models');
var app = express();

app.use(cors());

app.get('/', (req, res) => {
    db.club_tbl.findAll().then((result) => {
        res.json(result);
    });
})

db.sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('server running on port 3000')
    });
})