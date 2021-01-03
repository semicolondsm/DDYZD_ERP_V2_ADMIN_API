const express = require('express');
const router = express.Router();
const clubController = require('../controller/clubController.js');

router.get('/list', clubController.showList);
router.get('/:club_id/supply/list', clubController.supplyList);

router.post('/:club_id/supply/:supply_id/accept', clubController.supplyAccept);
router.post('/:club_id/supply/:supply_id/deny', clubController.supplyDeny);

module.exports = router;