module.exports = function (sequelize, DataTypes) {

    var user = sequelize.define("user", {
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
            allowNull: true
        },
        kidsName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        kidsPoints: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });

<<<<<<< HEAD:models/kidUser.js
    child.associate = function(models) {
        child.belongsTo(models.parent, {
=======
    user.associate = function (models) {
        user.belongsTo(models.user, {
>>>>>>> 38d4cf1c9f5ebda5b0d388fdb461464c3f31e833:models/user.js
            foreignKey: {
                allowNull: false
            }
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