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
<<<<<<< HEAD

=======
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
>>>>>>> 0c426b1d56190255e7bcab5f6c5dfc207749631b
    return user;
};