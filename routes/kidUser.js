var express = require("express");
var router = express.Router();


router.get("/kidUser", function (req, res) {

    res.render("kidUser");
});

module.exports = router;