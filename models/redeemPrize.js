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

<<<<<<< HEAD
    
        redeemPrize.belongsTo(models.parent, {
=======
    redeemPrize.associate = function (models) {
        redeemPrize.hasMany(models.redeemPrize, {
            onDelete: "cascade"
        });
        redeemPrize.belongsTo(models.user, {
>>>>>>> 0c426b1d56190255e7bcab5f6c5dfc207749631b
            foreignKey: {
                allowNull: false
            }
        });
   

    return redeemPrize;
};
   