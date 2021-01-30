const sequelize = require("sequelize");

module.exports = functions (sequelize, DataTypes) {
    var choresApproved = sequelize.define("choresApproved", {
        taskName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        choreValue: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        defineChore: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    choresApproved.associate = function (models) {
        choresApproved.belongsTO(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
        choresApproved.hasMany(models.chore_approval, {
            onDelete: "cascade"
        });
    };

    return choresApproved;
};