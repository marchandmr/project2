var express = require("express");
var router = express.Router();
//var user = require("../models/burger.js");

router.get("/", function (req, res) {

    res.render("login");
});

