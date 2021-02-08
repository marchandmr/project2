var db = require("../models");
var passport = require("../config/passport");


module.exports = function (app) {

  app.post("/api/login", passport.authenticate("local"), (req, res) => {
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



  //routes to create new kid
  app.post("/api/kids", function (req, res) {
    db.kids.create({
      kidName: req.body.name
    }).then(function (dbKids) {
      res.json(dbKids);
      console.log(dbKids.kidName + " was added!");
    });
  });

  //routes to find all kids
  app.get("/api/kids", function (req, res) {
    db.kids.findAll({}).then(function (dbKids) {
      res.json(dbKids);
    });
  });

  app.post("/api/kids/task", function (req, res) {
    db.kids.update(
      {
        kidTasks: req.body.task,
        where: { kidName: kid }
      })
      .then(function (dbTask) {
        res.json(dbTask)
        console.log(dbTask);
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
}
