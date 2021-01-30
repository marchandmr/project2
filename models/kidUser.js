module.exports = function(sequelize, DataTypes) {

    var child = sequelize.define ("child", {
        childName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        pointTotal: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });

    child.associate = function(models) {
        child.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
        child.hasMany(models.active_prizes, {
            onDelete: "cascade"
        });
        child.hasMany(models.active_chores, {
            onDelete: "cascade"
        })
    };

    return child;
};