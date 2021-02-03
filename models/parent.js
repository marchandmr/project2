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
    user.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    user.addHook("beforeCreate", user => {
        user.password = bcrypt.hashSync(
            user.password,
            bcrypt.genSaltSync(10),
            null
        );
    });
    return user;
};