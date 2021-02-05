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
        child.belongsTo(models.parent, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return child;
};