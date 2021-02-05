var db = require("../models");
const { route } = require("./html-routes");
var router = express.Router();

//add chores 
router.post("/api/chores", function (req, res) {
  db.chores.create(req.body).then(function (dbChores) {
    res.json(dbChores);
  });
});
route.put("/api/chores", function (req, res) {
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

route.put("/api/chores", function (req, res) {
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
route.put("/api/child", function (req, res) {
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
route.put("/api/user", function (req, res) {
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


//login acct***

route.post("/api/login", passport.authenticate("local"), function(req, res) {
  res.json(req.user);
});

route.post("/api/signup", function(req, res) {
  db.User.create({
    email: req.body.email,
    password: req.body.password
  })
    .then(function() {
      res.redirect(307, "/api/login");
    })
    .catch(function(err) {
      res.status(401).json(err);
    });
});

route.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});


route.get("/api/user_data", function(req, res) {
  if (!req.user) {
   
    res.json({});
  } else {
  
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  }
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

route.put("/api/chores", function (req, res) {
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

route.put("/api/chores", function (req, res) {
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
route.put("/api/prize", function (req, res) {
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

route.put("/api/chores", function (req, res) {
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