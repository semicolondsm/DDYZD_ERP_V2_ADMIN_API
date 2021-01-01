module.exports = (sequelize, DataTypes) => {
    const club = sequelize.define("club_tbl", {
        name: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },

        total_budget: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        current_budget: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    
    }, {
        freezeTableName: true,
    });
    return club;
    
    /*CREATE TABLE `club` (
        `id` int NOT NULL AUTO_INCREMENT,
        `name` varchar(30) NOT NULL,
        `total_budget` int DEFAULT NULL,
        `current_budget` int DEFAULT NULL,
        PRIMARY KEY (`id`)
      ) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
      */
};