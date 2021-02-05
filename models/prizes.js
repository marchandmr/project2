module.exports = function (sequilize, DataTypes) {
    var prizes = sequilize.define("prizes", {
        prizeName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pointValue: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    prizes.associate = function (models) {
        prizes.belongsTo(models.user, {
            foreignKey:
                { allowNull: false }
        });
    };

    return prizes;
};