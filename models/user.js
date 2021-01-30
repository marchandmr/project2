var bcrypt = require("bcryptjs")

module.exports = function(sequelize, DataTypes) {
    var user = sequilize.define("user"), {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validat: {
                isEmail: true
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    user.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

    user.addHook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    return user;
};