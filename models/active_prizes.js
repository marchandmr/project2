module.exports = function (sequelize, DataTypes) {
    var activePrizes = sequelize.define("activePrizes", {
        prizeStatus: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    activePrizes.associate = function (models) {
        activePrizes.belongsTo(models.prize_earned, {
            foreignKey: {
                allowNull: false
            }
        });
        activePrizes.belongsTo(models.kidUser, {
            foreignKey: {
                allowNull: false
            }
        });
        activePrizes.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return activePrizes;
};