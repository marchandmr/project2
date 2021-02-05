var db = require("../models");
var router = express.Router();

//add chores 
router.post("/api/chores", function (req, res) {
  db.chores.create(req.body).then(function (dbChores) {
    res.json(dbChores);
  });
});
app.put("/api/chores", function (req, res) {
  db.chores.update(
    req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function (dbChores) {
      res.json(dbChores);
    });
});


//find all chores
router.get("/api/chores", function (req, res) {
  db.chores.findAll({})
    .then(function (dbChores) {
      res.json(dbChores);
    });
});

//clam chores

router.post("/api/chores", function (req, res) {
  console.log(req.body);
  db.chores.create({
    title: req.body.title,
    body: req.body.body,
    category: req.body.category
  })
    .then(function (dbChores) {
      res.json(dbChores);
    });
});

app.put("/api/chores", function (req, res) {
  db.chores.update(
    req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function (dbChores) {
      res.json(dbChores);
    });
});


//create acct 
router.post("/api/child", function (req, res) {
  db.child.create(req.body).then(function (dbChild) {
    res.json(dbChild);
  });
});
app.put("/api/child", function (req, res) {
  db.child.update(
    req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function (dbChild) {
      res.json(dbChild);
    });
});

router.post("/api/user", function (req, res) {
  db.User.create(req.body).then(function (dbUser) {
    res.json(dbUser);
  });
});
app.put("/api/user", function (req, res) {
  db.User.update(
    req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
});


//login acct

app.get("/api/child/:id", function(req, res) {
  db.child.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(dbChild) {
    res.json(dbChild);
  });
});
app.get("/api/user/:id", function(req, res) {
  db.user.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(dbUser) {
    res.json(dbUser);
  });
});

//available chores

rrouter.get("/api/chores", function (req, res) {
  db.chores.findAll({})
    .then(function (dbChores) {
      res.json(dbChores);
    });
});
//clam chores

router.post("/api/chores", function (req, res) {
  console.log(req.body);
  db.chores.create({
    title: req.body.title,
    body: req.body.body,
    category: req.body.category
  })
    .then(function (dbChores) {
      res.json(dbChores);
    });
});

app.put("/api/chores", function (req, res) {
  db.chores.update(
    req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function (dbChores) {
      res.json(dbChores);
    });
});
//display user

router.post("/api/user", function (req, res) {
  db.User.findAll({})
    .then(function (dbUser) {
      res.json(dbUser);
    });
});
//clam 
router.post("/api/chores", function (req, res) {
  console.log(req.body);
  db.chores.create({
    title: req.body.title,
    body: req.body.body,
    category: req.body.category
  })
    .then(function (dbChores) {
      res.json(dbChores);
    });
});

app.put("/api/chores", function (req, res) {
  db.chores.update(
    req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function (dbChores) {
      res.json(dbChores);
    });
});

// login

router.post("/api/posts", function (req, res) {
  db.Post.findAll({})
    .then(function (dbPost) {
      res.json(dbPost);
    });
});

//add prize 
router.post("/api/prize", function (req, res) {
  db.Prize.create(req.body)
    .then(function (dbPrize) {
      res.json(dbPrize);
    });
});
app.put("/api/prize", function (req, res) {
  db.Prize.update(
    req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function (dbPrize) {
      res.json(dbPrize);
    });
});

//available prize 

router.get("/api/prize", function (req, res) {
  db.Prize.findAll({})
    .then(function (dbPrize) {
      res.json(dbPrize);
    });
});
//clam 
router.post("/api/chores", function (req, res) {
  console.log(req.body);
  db.chores.create({
    title: req.body.title,
    body: req.body.body,
    category: req.body.category
  })
    .then(function (dbChores) {
      res.json(dbChores);
    });
});

app.put("/api/chores", function (req, res) {
  db.chores.update(
    req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function (dbChores) {
      res.json(dbChores);
    });
});