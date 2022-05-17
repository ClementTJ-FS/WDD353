const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    pagename: "home",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    pagename: "about",
  });
});

router.get("/contact", (req, res) => {
  res.render("contact", {
    pagename: "contact",
  });
});

router.get("/services", (req, res) => {
  res.render("services", {
    pagename: "services",
  });
});

router.get("/portfolio", (req, res) => {
  res.render("portfolio", {
    pagename: "portfolio",
  });
});

router.get("/register", (req, res) => {
  res.render("register", {
    pagename: "register",
  });
});


module.exports = router;
