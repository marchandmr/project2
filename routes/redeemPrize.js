var express = require("express");
var router = express.Router();


router.get("/redeemPrize", function (req, res) {

    res.render("redeemPrize");
});

module.exports = router;