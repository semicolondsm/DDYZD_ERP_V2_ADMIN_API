const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development'; // production
const config = require('../config/config')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};

db.club_tbl = require('./club')(sequelize, Sequelize);
db.tag_tbl = require('./tag')(sequelize, Sequelize);
db.clubTag_tbl = require('./club_tag')(sequelize, Sequelize);
db.user_tbl = require('./user')(sequelize, Sequelize);
db.supply_tbl = require('./supply')(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;