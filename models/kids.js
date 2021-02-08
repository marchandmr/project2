const user = require("./user");

module.exports = function (sequilize, DataTypes) {

    var kids = sequilize.define("kids", {
        kidName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        kidTasks: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "No current tasks"
        }
    });
    kids.associate = function (models) {
        kids.belongsTo(models.user, {
            foreignKey: {
                defaultValue: 1,
                allowNull: false
            }
        });
    };
    return kids;
}