module.exports = function(sequelize, DataTypes) {
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

    
        redeemPrize.belongsTo(models.parent, {
            foreignKey: {
                allowNull: false
            }
        });
   

    return redeemPrize;
};
   