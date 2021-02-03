var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var routes = require("./routes/htmlroutes.js");
app.use(routes);

var routes = require("./routes/chores.js")
app.use(routes);

var routes = require("./routes/prizes.js")
app.use(routes);

var routes = require("./routes/parent.js")
app.use(routes);

var routes = require("./routes/kidUser.js")
app.use(routes);

var routes = require("./routes/redeemPrize.js")
app.use(routes);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});