const db = require('../models');
const { exchange } = require('../config/exchange')

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

exports.supplyList = async (req, res) => {
    let club_arr = [];
    db.sequelize.query("SELECT gcn, status, price, supply.name, count, link FROM supply INNER JOIN user ON supply.user_id = user.id WHERE status = ?;", {replacements: [req.query.state]}).then((result, metadata) => {
        for(let i = 0; i < result[0].length; i++){
            club_arr.push({
                applicant: result[0][i].name,
                status: exchange(result[0][i].status),
                price: result[0][i].price,
                name: result[0][i].name,
                count: result[0][i].count,
                option: null,
                url: result[0][i].link
            });
        }

        if(club_arr.length === 0){
            res.status(404).send("404 NOT FOUND");
            return;
        }

        res.json(club_arr);
    })
}