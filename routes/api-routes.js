var db = require("../models");
var router = express.Router();



//routes to find all chores
router.get("/api/chores", function(req, res) {
  db.Chores.findAll({}).then(function(dbChores) {
    res.json(dbChores);
  });
});

// routes to create a chore
router.post("/api/chores", function(req, res) {
  console.log(req.body.chore_Name);
  db.Chores.insertOne(req.body.chore_Name).then(function(dbChores) {
    res.json(dbChores);
  });
});

//routes to create new kid
router.post("/api/user", function(req, res) {
  console.log(req.body.kid_name);
  db.User.insertOne(req.body.kid_name).then(function(dbUser) {
    res.json(dbUser);
  });
});
//routes to find all kids
router.get("/api/kids", function(req, res) {
  db.Kids.findAll({}).then(function(dbKids) {
    res.json(dbKids);
  });
});

//routes to find a family user
router.get("/api/user/:id", function(req, res) {
  db.User.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(dbUser) {
    res.json(dbUser);
  });
});

//route to claim a chore
router.post('/chores/claim/:id', function (req, res) {
  db.Chores.updateOne(req.params.id, function() {
    res.redirect('/index');
  });
});

//routes to find all prizes
router.get("/api/prize", function(req, res) {
  db.Prize.findAll({}).then(function(dbPrize) {
    res.json(dbPrize);
  });
});

// routes to create a prize
router.post("/api/prize", function(req, res) {
  console.log(req.body.prize);
  db.Chores.insertOne(req.body.prize).then(function(dbPrize) {
    res.json(dbPrize);
  });
});