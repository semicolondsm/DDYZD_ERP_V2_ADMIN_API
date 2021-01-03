const db = require('../models');
const club = require('../models/club');

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