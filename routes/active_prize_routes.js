var express = require("express");
var router = express.Router();
//var user = require("../models/burger.js");

router.get("/activeprize", function (req, res) {

    res.render("prize");
});

module.exports = router;