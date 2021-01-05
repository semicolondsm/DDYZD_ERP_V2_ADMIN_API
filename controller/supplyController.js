const db = require('../models');

exports.getInvoice = async (req, res) => {
    db.supply_tbl.findOne({
        attributes: ['invoice'],
        where: {
            id: req.params.supply_id
        }
    })
    .then(result => res.json(result))
    .catch(err => res.json(err))
}