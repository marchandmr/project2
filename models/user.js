const bcrypt = require("bcryptjs");
module.exports = function (sequelize, DataTypes) {

    var user = sequelize.define("user", {
        familyName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        kids: {
            type: DataTypes.STRING,
            allowNull: true
        },
        kidsPoints: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });

<<<<<<< HEAD
    user.associate = function (models) {
=======

    user.associate. = function (models) {
>>>>>>> 6d25715f8faf778a3d8c01220c3096a9fca1cb73
        user.hasMany(models.kids, {
            onDelete: "cascade"
        });
    };

    

    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    user.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    user.addHook("beforeCreate", user => {
        user.password = bcrypt.hashSync(
            user.password,
            bcrypt.genSaltSync(10),
            null
        );
    });

    return user;
};