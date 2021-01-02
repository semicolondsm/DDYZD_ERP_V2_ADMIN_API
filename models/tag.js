module.exports = (sequelize, DataTypes) => {
    var tag = sequelize.define("tag", {
        tag: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    });

    tag.associate = function (models) {
        tag.hasOne(models.club_tag, { 
          foreignKey: 'tag_id', 
          as: 'club_tag', 
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        });
    };

    return tag;
};

/*
    CREATE TABLE `tag` (
    `id` int NOT NULL AUTO_INCREMENT,
    `title` varchar(15) NOT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

    ]*/