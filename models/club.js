module.exports = (sequelize, DataTypes) => {
    var club = sequelize.define("club", {
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
            allowNull: true,
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    });

    club.associate = function (models) {
        club.hasOne(models.club_tag, { 
          foreignKey: 'club_id', 
          as: 'club_tag', 
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        });
      };

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