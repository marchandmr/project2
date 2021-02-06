module.exports = function (sequilize, DataTypes) {
   var kids = sequilize.define("chores", {
       kidName: {
           type: DataTypes.STRING,
           allowNull: false
       },
       kidPoints: {
           type: DataTypes.INTEGER,
           allowNull: false
       }
   });
   kids.associate = function(models) {
       kids.belongsTo(models.user, {
           foreignKey: {
               allowNull: false
           }
       });
   };
   return kids;
};