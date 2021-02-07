var express = require("express");
var session = require("express-session");

var passport = require("./config/passport");

var PORT = process.env.PORT || 8080;
const db = require("./models");

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// using passport to keep track of users login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);




db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(
            "==> :earth_americas:  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });
});