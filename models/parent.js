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
    return user;
};