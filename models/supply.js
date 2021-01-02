module.exports = (sequelize, DataTypes) => {
    var supply = sequelize.define("supply", {
        name: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        message: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        link: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        invoice: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        club_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true
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

    return supply;
};



/*
CREATE TABLE `supply` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(200) NOT NULL,
    `price` int NOT NULL,
    `status` int NOT NULL,
    `message` varchar(200) DEFAULT NULL,
    `count` int NOT NULL,
    `link` varchar(300) NOT NULL,
    `invoice` varchar(100) DEFAULT NULL,
    `club_id` int DEFAULT NULL,
    `user_id` int DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `club_id` (`club_id`),
    KEY `user_id` (`user_id`),
    CONSTRAINT `supply_ibfk_1` FOREIGN KEY (`club_id`) REFERENCES `club` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT `supply_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
  ) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
*/