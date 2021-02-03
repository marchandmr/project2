var express = require("express");
var router = express.Router();


router.get("/prize", function (req, res) {

    res.render("prize");
});

module.exports = router;