const user = require("./user");

module.exports = function (sequilize, DataTypes) {

    var kids = sequilize.define("kids", {
        kidName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        kidPoints: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });
    kids.associate = function (models) {
        kids.belongsTo(models.user, {
            foreignKey: {
                defaultValue: 2,
                allowNull: false
            }
        });
    };
    return kids;
}