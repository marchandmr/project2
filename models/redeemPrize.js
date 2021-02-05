module.exports = function (sequelize, DataTypes) {
    var redeemPrize = sequelize.define("redeemPrize", {
        prizeName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prizeValue: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    redeemPrize.associate = function (models) {
        redeemPrize.hasMany(models.redeemPrize, {
            onDelete: "cascade"
        });
        redeemPrize.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return redeemPrize;
};