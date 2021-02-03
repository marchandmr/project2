var db = require("../models");


module.exports = function(app){
app.get("/",function(req,res){
    db.Chores.findAll({}).then(function(dbChores){
        res.json(dbChores);
    });
});
};