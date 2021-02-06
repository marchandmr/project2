var express = require("express");
var session = require("express-session");
var passport = require("./config/passport");
var PORT = process.env.PORT || 8080;
var app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
const db = require("./models");

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// using passport to keep track of users login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());



db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(
            "==> :earth_americas:  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });
});