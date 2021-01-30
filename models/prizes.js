module.exports = function(sequilize, DataTypes) {
    var prizes = sequile.define("prizes", {
        prizeName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pointValue: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
};