var express = require("express");
var router = express.Router();
var isAuthenticated = require("../config/middleware/isAutenticated");
var db = require("../models");



module.exports = function (app) {

    app.get("/", function (req, res) {

        //router.get("/login", function (req, res) {
        if (req.user) {
            res.render("/home");
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

    app.get("/home", function (req, res) {
        //router.get("/login", function (req, res) {

        res.render("home", {
            style: "home.css"
        });
    });

    app.get("/prize", function (req, res) {

        //router.get("/login", function (req, res) {

        res.render("prize", {
            style: "prize.css"
        });
    });
};

