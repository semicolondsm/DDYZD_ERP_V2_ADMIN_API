const express = require('express');
const router = express.Router();
const supplyController = require('../controller/supplyController.js');

router.get('/:supply_id/invoice', supplyController.getInvoice);
router.get('/list', supplyController.supplyList);


module.exports = router;