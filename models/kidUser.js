module.exports = function (sequelize, DataTypes) {

    var child = sequelize.define("child", {
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
    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    child.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    child.addHook("beforeCreate", user => {
        child.password = bcrypt.hashSync(
            child.password,
            bcrypt.genSaltSync(10),
            null
        );
    });

    return child;
};