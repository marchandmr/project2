var express = require("express");
var router = express.Router();
var isAuthenticated = require("../config/middleware/isAutenticated");
var db = require("../models");



module.exports = function (app) {

    app.get("/", function (req, res) {

        //router.get("/login", function (req, res) {
        if (req.user) {
            res.render("home");
        }

        res.render("login", {
            style: "login.css"

        });
    });

    app.get("/create", function (req, res) {

        //router.get("/login", function (req, res) {

        res.render("createAcct", {
            style: "createAcct.css"
        });
    });

    app.get("/home", isAuthenticated, (req, res) => {
        let kidsString = req.user.kid;
        console.log(kidsString);
        let kidsObject = JSON.parse(kidsString);
        console.log(kidsObject);
        res.render("home", {
            style: "home.css",
            user: req.user
        });


        //router.get("/login", function (req, res) {
    });



    app.get("/prize", function (req, res) {

        //router.get("/login", function (req, res) {

        res.render("prize", {
            style: "prize.css"
        });
    });
};

