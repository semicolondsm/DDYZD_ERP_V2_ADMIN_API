const db = require('../models');

exports.showList = async (req, res) => {
    db.sequelize.query("SELECT club.name, tag FROM club_tag INNER JOIN club ON club_tag.club_id = club.id INNER JOIN tag ON club_tag.tag_id = tag.id;").then((results, metadata) => {
        res.json(results[0]);
    });
}

exports.supplyList = async (req, res) => {
    console.log(req.query);
}