const express = require('express');
const router = express.Router();
const clubController = require('../controller/clubController.js');

router.get('/list', clubController.showList);
router.get('/:club_id/supply/list', clubController.supplyList);

module.exports = router;