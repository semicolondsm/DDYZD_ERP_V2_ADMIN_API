module.exports = (sequelize, DataTypes) => {
    var club_tag = sequelize.define("club_tag", {
        tag_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: 'tag', key: 'id' },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            primaryKey: true,
        },
        club_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: 'club', key: 'id' },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            primaryKey: true,
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    });
    return club_tag;
    
    /*
    CREATE TABLE `club_tag` (
    `tag_id` int NOT NULL,
    `club_id` int NOT NULL,
    PRIMARY KEY (`tag_id`,`club_id`),
    KEY `club_id` (`club_id`),
    CONSTRAINT `club_tag_ibfk_1` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `club_tag_ibfk_2` FOREIGN KEY (`club_id`) REFERENCES `club` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    */
};