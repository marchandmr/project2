var path = require("path");



module.exports = function (app) {
    // index route loads 
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/index.handlebars"));
    });

    // cms route loads cms.html
    app.get("/chores", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/chores.handlebars"));
    });

    // blog route loads blog.html
    app.get("/createAcct", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/createAcct.handlebars"));
    });

    // authors route loads author-manager.html
    app.get("/main", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/main.handlebars"));
    });

    app.get("/login", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/login.handlebars"));
    });

    app.get("/prize", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/prize.handlebars"));
    });
};