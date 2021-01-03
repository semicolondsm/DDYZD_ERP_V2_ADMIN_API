module.exports = (sequelize, DataTypes) => {
    var user = sequelize.define("user", {
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        gcn: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        club_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {model: 'club', key: 'id'},
            onUpdate: 'CASCADE'
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    });

    user.associate = function (models) {
        user.hasOne(models.supply, { 
          foreignKey: 'user_id', 
          as: 'supply', 
          onUpdate: 'CASCADE'
        });
    };

    return user;
};


/*
CREATE TABLE `user` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(20) NOT NULL,
    `gcn` varchar(10) NOT NULL,
    `email` varchar(50) NOT NULL,
    `club_id` int DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `club_id` (`club_id`),
    CONSTRAINT `user_ibfk_1` FOREIGN KEY (`club_id`) REFERENCES `club` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
  ) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
*/