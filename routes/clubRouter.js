const express = require('express');
const router = express.Router();
const clubController = require('../controller/clubController.js');

router.get('/list', clubController.showList);

module.exports = router;