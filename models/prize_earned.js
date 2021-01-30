const sequelize = require("sequelize")

module.exports = function (sequilize, DataTypes) {
    var prizeEarned = sequelize.define("prizeEarned", {
        prizeName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pointValue: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    prizeEarned.associate = function (models) {
        prizeEarned.hasMany(models.active_prizes, {
            onDelete: "cascade"
        });
        prizeEarned.belongsTo(models.user, {
            foreignKey: {
                allowNull:false
            }
        });
    };

    return prizeEarned;
};