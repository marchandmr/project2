var express = require("express");



app.get("/", function (req, res) {

    //app.get("/login", function (req, res) {

    res.render("login", {
        style: "login.css"
    });
});

app.get("/create", function (req, res) {

    //app.get("/login", function (req, res) {

    res.render("createAcct", {
        style: "createAcct.css"
    });
});

app.get("/home", function (req, res) {

    //app.get("/login", function (req, res) {

    res.render("home", {
        style: "home.css"
    });
});

app.get("/prize", function (req, res) {

    //app.get("/login", function (req, res) {

    res.render("prize", {
        style: "prize.css"
    });
});


module.exports = app;