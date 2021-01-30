module.exports = function (sequilize, DataTypes) {
    var activeChores = sequilize.define("activeChores", {
        choreStatus: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    activeChores.associate = function (models) {
        activeChores.belongsTo(models.chore_approval, {
            foreignKey: {
                allowNull: false
            }
        });
        activeChores.belongsTo(models.kidUser, {
            foreignKey: {
                allowNull: false
            }
        });
        activeChores.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return activeChores;
};