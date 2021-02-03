var express = require("express");
var router = express.Router();
//var user = require("../models/burger.js");

router.get("/login", function (req, res) {

    res.render("login");
});

module.exports = router;