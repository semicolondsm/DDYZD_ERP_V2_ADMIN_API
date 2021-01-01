const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development'; // production
const config = require('../config/config')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;