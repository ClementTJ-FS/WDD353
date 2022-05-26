const express = require("express");
const router = express.Router();
let sessions = require("express-session");
const getLogin = require("../api/api");

router.use(
  sessions({
    secret: "thisisasecretkey",
    saveUninitialized: true,
    resave: false,
    unset: "destroy",
  })
);

let session;

router.get("/", (req, res) => {
  session = req.session;
  res.render("index", {
    pagename: "home",
    sess: session,
  });
});

router.get("/about", (req, res) => {
  session = req.session;
  res.render("about", {
    pagename: "about",
    sess: session,
  });
});

router.get("/contact", (req, res) => {
  session = req.session;
  res.render("contact", {
    pagename: "contact",
    sess: session,
  });
});

router.get("/services", (req, res) => {
  session = req.session;
  res.render("services", {
    pagename: "services",
    sess: session,
  });
});

router.get("/portfolio", (req, res) => {
  session = req.session;
  res.render("portfolio", {
    pagename: "portfolio",
    sess: session,
  });
});

router.get("/logon", (req, res) => {
  session = req.session;
  res.render("logon", {
    pagename: "logon",
    sess: session,
  });
});
const myusername = "test";
const mypassword = "test";
router.post("/login", async (req, res) => {
  //un and pw
  const userid = req.body.userid;
  const pw = req.body.password;

  if (userid == myusername && pw == mypassword) {
    session = req.session;
    session.userid = userid;
    //call getlogin -pass payload
    const data = {
      userid: userid,
      password: pw,
    };
    await getLogin(data)
      .then((result) => {
        res.render("index", {
          pagename: "home",
          message: result.data.message,
          sess: session,
        });
      })
      .catch((err) => {
        res.render("logon", {
          pagename: "logon",
          error: err.message,
        });
      });
  } else {
    res.render("logon", {
      pagename: "logon",
      error: "Invalid credentials.",
    });
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.render("index", {
      pagename: "home",
    });
  });
});

module.exports = router;
