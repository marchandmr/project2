module.exports = function (sequilize, DataTypes) {

    var user = sequilize.define("user", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    user.associate = function(models) {
        user.hasMany(models.kidUser, {
            onDelete: "cascade"
        });
        user.hasMany(models.chore_prizes, {
            onDelete: "cascade"
        });
        user.hasMany(models.chore_approval, {
            onDelete: "cascade"
        });
        user.hasMany(models.active_prizes, {
            onDelete: "cascade"
        });
        user.hasMany(models.active_chores, {
            onDelete: "cascade"
        });
    };

    return user;
};