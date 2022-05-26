const express = require("express");
const router = express.Router();
const getRegister = require("../api/api");

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

router.post("/register", async (req, res) => {
  //the data, from api
  let fName = req.body.fName,
    lName = req.body.lName,
    address = req.body.address,
    city = req.body.city,
    state = req.body.state,
    zip = req.body.zip,
    age = req.body.age,
    gender = req.body.gender,
    consent = req.body.consent,
    bio = req.body.bio;
    //obj to hold data
    let values = {
      fName,
      lName,
      address,
      city,
      state,
      zip,
      age,
      gender,
      consent,
      bio,
    },
    //status vars
    errors = {},
    status = "",
    alert = "";
  await getRegister(values)
    .then((result) => {
      status = "Registration Successful!",
      alert = "alert alert-success";
      values = {};
      res.render("register", {
        pagename: "register",
        values: values,
        errors: errors,
        status: status,
        alert: alert,
      });
    })
    .catch((err) => {
      console.log(values);
      errors = err.response.data.error.message,
      status = "Registration Failed!",
      alert = "alert alert-danger"
      res.render("register", {
        pagename: "register",
        values: values,
        errors: errors,
        status: status,
        alert: alert,
      });
    });
});

module.exports = router;
