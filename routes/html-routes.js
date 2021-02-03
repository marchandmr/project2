var express = require("express");
var router = express.Router();


router.get("/", function (req, res) {

    //router.get("/login", function (req, res) {

    res.render("login");
});

router.get("/create", function (req, res) {

    //router.get("/login", function (req, res) {

    res.render("createAcct");
});

router.get("/kid", function (req, res) {

    //router.get("/login", function (req, res) {

    res.render("index");
});

router.get("/parent", function (req, res) {

    //router.get("/login", function (req, res) {

    res.render("parent");
});

router.get("/prize", function (req, res) {

    //router.get("/login", function (req, res) {

    res.render("prize");
});

router.get("/chores", function (req, res) {

    //router.get("/login", function (req, res) {

    res.render("chores");
});

module.exports = router;