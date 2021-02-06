module.exports = function (sequilize, DataTypes) {

    var chores = sequilize.define("chores", {
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

    chores.associate = function (models) {
        chores.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });


    };

    return chores;



};
