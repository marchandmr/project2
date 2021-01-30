module.exports = function(sequelize, DataTypes) {
    var chorePrize = sequelize.define("chorePrize", {
        prizeName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prizeValue: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    chorePrize.associate = function (models) {
        chorePrize.hasMany(models.active_prizes, {
            onDelete: "cascade"
        });
        chorePrize.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return chorePrize;
};
   