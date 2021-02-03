var express = require("express");
var router = express.Router();
//var user = require("../models/burger.js");

router.get("/chores", function (req, res) {

    res.render("chores");
});

module.exports = router;