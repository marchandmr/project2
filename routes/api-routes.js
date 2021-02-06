var db = require("../models");



module.exports = function (app) {
  //routes to find all chores
  app.get("/api/chores", function (req, res) {
    db.Chores.findAll({}).then(function (dbChores) {
      res.json(dbChores);
    });

    // routes to create a chore
    app.post("/api/chores", function (req, res) {
      console.log(req.body.chore_Name);
      db.Chores.insertOne(req.body.chore_Name).then(function (dbChores) {
        res.json(dbChores);
      });

      //routes to create new kid
      app.post("/api/user", function (req, res) {
        console.log(req.body.kid_name);
        db.User.insertOne(req.body.kid_name).then(function (dbUser) {
          res.json(dbUser);
        });
      });
      //routes to find all kids
      app.get("/api/kids", function (req, res) {
        db.Kids.findAll({}).then(function (dbKids) {
          res.json(dbKids);
        });

        //routes to find a family user
        app.get("/api/user/:id", function (req, res) {
          db.User.findOne({
            where: {
              id: req.params.id
            }
          }).then(function (dbUser) {
            res.json(dbUser);
          });

          //route to claim a chore
          app.post('/chores/claim/:id', function (req, res) {
            db.Chores.updateOne(req.params.id, function () {
              res.redirect('/index');
            });

            //routes to find all prizes
            app.get("/api/prize", function (req, res) {
              db.Prize.findAll({}).then(function (dbPrize) {
                res.json(dbPrize);
              });

              // routes to create a prize
              app.post("/api/prize", function (req, res) {
                console.log(req.body.prize);
                db.Chores.insertOne(req.body.prize).then(function (dbPrize) {
                  res.json(dbPrize);
                });
              });

              //route to delete a chore
              app.delete("/api/chores/:id", function (req, res) {
                db.Chores.destroy({
                  where: {
                    id: req.params.id
                  }
                }).then(function (dbChores) {
                  res.json(dbChores);
                });
              });

              //routes to complete a chore
              app.post('/chores/complete/:id', function (req, res) {
                db.Chores.updateOne(req.params.id, function () {
                  res.redirect('/index');
                });
              });
            };