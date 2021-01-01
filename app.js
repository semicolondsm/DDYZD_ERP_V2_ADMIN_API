const express = require('express');
const cors = require('cors');
require('dotenv').config();

var db = require('./models');
var clubRouter = require('./routes/clubRouter');
var app = express();

app.use(cors());

app.use('/club', clubRouter);

app.get('/', (req, res) => {
    res.send('Hello;');
})

db.sequelize.sync().then( async () => {
    app.listen(3000, () => {
        console.log('server running on port 3000')
    });
})
