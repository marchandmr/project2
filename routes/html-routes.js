var express = require("express");
var router = express.Router();


router.get("/", function (req, res) {

    //router.get("/login", function (req, res) {

    res.render("login", {
        style: "login.css"
    });
});

router.get("/create", function (req, res) {

    //router.get("/login", function (req, res) {

    res.render("createAcct", {
        style: "createAcct.css"
    });
});

router.get("/home", function (req, res) {

    //router.get("/login", function (req, res) {

    res.render("home", {
        style: "home.css"
    });
});

router.get("/prize", function (req, res) {

    //router.get("/login", function (req, res) {

    res.render("prize", {
        style: "prize.css"
    });
});


module.exports = router;