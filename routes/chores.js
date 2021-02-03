var express = require("express");
var router = express.Router();
var chores = require('../models/chores.js');

router.get("/chores", function (req, res) {
    res.render("chores");
});
//renders all chores
router.get('/chores', function (req, res) {
    chores.selectAll(function(data) {
      var hbsObject = { chores: data };
      //console.log(hbsObject);
      res.render('chores', hbsObject);
    });
  });
  //add a new chores 
  router.post('/chores/Sumit', function (req, res) {
    chores.insertOne(req.body.chores_name, function() {
      res.redirect('/chores');
    });
  });
 //claim chores
  router.post('/chores/Claim/:id', function (req, res) {
    chores.updateOne(req.params.id, function() {
      res.redirect('/chores');
    });
  });






module.exports = router;