const express = require('express');
const router = express.Router();
const supplyController = require('../controller/supplyController.js');

router.get('/:supply_id/invoice', supplyController.getInvoice);

module.exports = router;