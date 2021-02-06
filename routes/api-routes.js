var db = require("../models");
var passport = require("../config/passport");


module.exports = function (app) {

  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    console.log(req.body);
    db.user.create({
      email: req.body.email,
      password: req.body.password,
      familyName: req.body.familyName
    })
      .then((result) => {
        console.log(result);
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });


  //routes to find all chores
  app.get("/api/chores", function (req, res) {
    db.chores.findAll({}).then(function (dbChores) {
      res.json(dbChores);
    });
  });

  // routes to create a chore
  app.post("/api/chores", function (req, res) {
    console.log(req.body.taskName);
    db.chores.update(req.body.taskName).then(function (dbChores) {
      res.json(dbChores);
    });
  });
  //routes to create new kid
  app.post("/api/user", function (req, res) {
    console.log(req.body.kidName);
    db.user.update(req.body.kidName).then(function (dbUser) {
      res.json(dbUser);
    });
  });
  //routes to find all kids
  app.get("/api/kids", function (req, res) {
    db.kids.findAll({}).then(function (dbKids) {
      res.json(dbKids);
    });
  });
  //routes to find a family user
  app.get("/api/user/:id", function (req, res) {
    db.user.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });
  //route to claim a chore
  app.post('/chores/claim/:id', function (req, res) {
    db.chores.updateOne(req.params.id, function () {
      res.redirect('/index');
    });
  });
  //routes to find all prizes
  app.get("/api/prize", function (req, res) {
    db.prize.findAll({}).then(function (dbPrize) {
      res.json(dbPrize);
    });
  });
  // routes to create a prize
  app.post("/api/prize", function (req, res) {
    console.log(req.body.prize);
    db.chores.insertOne(req.body.prize).then(function (dbPrize) {
      res.json(dbPrize);
    });
  });

  //route to delete a chore
  app.delete("/api/chores/:id", function (req, res) {
    db.chores.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbChores) {
      res.json(dbChores);
    });
  });

  //routes to complete a chore
  app.post('/chores/complete/:id', function (req, res) {
    db.chores.updateOne(req.params.id, function () {
      res.redirect('/index');
    });
  });
};