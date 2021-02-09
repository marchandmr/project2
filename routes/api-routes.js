var db = require("../models");
var passport = require("../config/passport");
const consoleTextBox = require("console-text-box");

module.exports = function (app) {
  //route for lgging in a user
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user.
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
      consoleTextBox(dbKids.kidName + " was added!");
    });
  });

  //routes to find all kids
  app.get("/api/kids", function (req, res) {
    db.kids.findAll({}).then(function (dbKids) {
      res.json(dbKids);
    });
  });

  // route to update the current tasks
  app.put("/api/kids", function (req, res) {
    consoleTextBox(req.body.kid, req.body.task)
    db.kids.update(
      {
        kidTasks: req.body.task

      },
      { where: { kidName: req.body.kid } })
      .then(function (dbTask) {
        res.json(dbTask)
      });

  });


  //route to delete a child from database
  app.delete("/api/kids/:id", function (req, res) {
    console.log(req.params.id);
    db.kids.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbTask) {
      res.json(dbTask)
      consoleTextBox("Succesfully removed")
    });
  });

  //logout route
  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });
}
