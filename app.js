const express = require('express');
const cors = require('cors');
require('dotenv').config();

var db = require('./models');
var app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World!");
})

db.sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('server running on port 3000')
    });
})