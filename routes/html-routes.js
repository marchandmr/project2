var express = require("express");
var isAuthenticated = require("../config/middleware/isAutenticated");
var db = require("../models");

module.exports = function (app) {
    //home page
    app.get("/", function (req, res) {
        if (req.user) {
            res.render("home");
        }
        res.render("login", {
            style: "login.css"
        });
    });
    // create account page
    app.get("/create", function (req, res) {
        res.render("createAcct", {
            style: "createAcct.css"
        });
    });
    // home page will only display if user is logged in
    app.get("/home", isAuthenticated, (req, res) => {
        db.kids.findAll({ raw: true }).then(function (dbKids) {
            var familyName = req.user.familyName
            res.render("home", { style: "home.css", kids: dbKids, family: familyName });
        })
    });
};

