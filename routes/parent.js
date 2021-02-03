var express = require("express");
var router = express.Router();


router.get("/parent", function (req, res) {

    res.render("parent");
});

module.exports = router;