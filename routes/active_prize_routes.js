var db = require("../models");

module.exports = function(app){
    app.get("/",function(req,res){
        db.Prizes.findAll({}).then(function(dbPrizes){
            res.json(dbPrizes);
        });
    });
    };