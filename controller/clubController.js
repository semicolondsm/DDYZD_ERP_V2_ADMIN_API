const db = require('../models');

let exchange = (status) => {
    switch(status){
        case 0:
            return "승인 거절";
            break;
        case 1:
            return "승인 완료";
            break;
        case 2:
            return "요청 중";
            break;
        default:
            console.log("ERROR!!");
    }
}

exports.showList = async (req, res) => {
    db.sequelize.query("SELECT club.name, tag FROM club_tag INNER JOIN club ON club_tag.club_id = club.id INNER JOIN tag ON club_tag.tag_id = tag.id;").then((result, metadata) => {
        res.json(result[0]);
    });
}

exports.supplyList = async (req, res) => {
    let club_arr = [];
    db.sequelize.query("SELECT supply.name, price, status, count, link, gcn FROM supply INNER JOIN user ON supply.user_id = user.id WHERE status=? AND supply.club_id=?;", {replacements: [req.query.state, req.params.club_id]}).then((result, metadata) => {
        
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

exports.supplyAccept = async (req, res) => {
    db.supply_tbl.findOne({
        attributes: ["status"],
        where: {id: req.params.supply_id}
    })
    .then(db_status => {
        if(db_status.status === 2) {
            db.supply_tbl.update({status: 1}, {where: {id: req.params.supply_id}})
            .then(result => res.json(result))
            .catch(err => res.json(err));
        } else {
            res.status(400).send("400 이미 거절 되었거나 승락 되었습니다.")
        }
    })
}

exports.supplyDeny = async (req, res) => {
    db.supply_tbl.findOne({
        attributes: ["status"],
        where: {id: req.params.supply_id}
    })
    .then(db_status => {
        if(db_status.status === 2) {
            db.supply_tbl.update({status: 0}, {where: {id: req.params.supply_id}})
            .then(result => res.json(result))
            .catch(err => res.json(err));
        } else {
            res.status(400).send("400 이미 거절 되었거나 승락 되었습니다.")
        }
    })
}