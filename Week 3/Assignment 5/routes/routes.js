const express = require("express");
const { Store } = require("express-session");
const router = express.Router();
let sessions = require("express-session");

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

router.get("/register", (req, res) => {
  session = req.session;
  res.render("register", {
    pagename: "register",
    sess: session,
  });
});

router.post("/register", (req, res) => {
  //set the values from form
  const fName = req.body.fName;
  const lName = req.body.lName;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;
  const age = req.body.age;
  let gender = req.body.gender;
  let consent = req.body.consent;
  const bio = req.body.bio;

  //the regexs
  const textRegex = /^[a-z]+$/i;
  const addRegex = /^[a-z0-9\s,.'-]{3,}$/i;
  const stateRegex =
    /^((A[LKSZR])|(C[AOT])|(D[EC])|(F[ML])|(G[AU])|(HI)|(I[DLNA])|(K[SY])|(LA)|(M[EHDAINSOT])|(N[EVHJMYCD])|(MP)|(O[HKR])|(P[WAR])|(RI)|(S[CD])|(T[NX])|(UT)|(V[TIA])|(W[AVIY]))$/i;
  const zipRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

  //objects/vars to hold data
  let errors = {};
  let status;
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
  };

  //validations
  if (textRegex.test(fName) && fName.length >= 2) {
    delete errors.fNameMsg;
  } else {
    errors.fNameMsg = "A first name is required. (Minimum 2 characters)";
  }
  if (textRegex.test(lName) && lName.length >= 2) {
    delete errors.lNameMsg;
  } else {
    errors.lNameMsg = "A last name is required. (Minimum 2 characters)";
  }
  if (addRegex.test(address)) {
    delete errors.addressMsg;
  } else {
    errors.addressMsg = "An address name is required.";
  }
  if (addRegex.test(city) && city.length >= 2) {
    delete errors.cityMsg;
  } else {
    errors.cityMsg = "A city is required. (Minimum 2 characters)";
  }
  if (stateRegex.test(state)) {
    delete errors.stateMsg;
  } else {
    errors.stateMsg = "A state is required. (2 character abbreviation)";
  }
  if (zipRegex.test(zip) && zip.length >= 5) {
    delete errors.zipMsg;
  } else {
    errors.zipMsg = "A valid zip code is required.";
  }
  if (age === "Age") {
    errors.ageMsg = "An age is required.";
  } else if (age != undefined) {
    delete errors.ageMsg;
  } else {
    errors.ageMsg = "An age is required.";
  }
  if (gender === "male" || gender === "female") {
    delete errors.genderMsg;
  } else {
    errors.genderMsg = "A gender is required.";
  }
  if (consent === "on") {
    delete errors.consentMsg;
  } else {
    errors.consentMsg = "Consent is required.";
  }
  if (textRegex.test(bio) && bio.length >= 10) {
    delete errors.bioMsg;
  } else {
    errors.bioMsg = "A bio is required. (Minimum 10 characters)";
  }

  //set alert
  const isEmpty = Object.keys(errors).length === 0;
  let alert = "";
  if (isEmpty) {
    status = "Registration Successful!";
    alert = "alert alert-success";
    values = {};
    consent = "";
    gender = "";
    bio = "";
  } else if (!isEmpty) {
    status = "Registration Failed!";
    alert = "alert alert-danger";
  }

  //render page again
  res.render("register", {
    pagename: "register",
    errors: errors,
    status: status,
    alert: alert,
    values: values,
    gender: gender,
    consent: consent,
    bio: bio,
  });
});

router.get("/login", (req, res) => {
  session = req.session;
  res.render("login", {
    pagename: "login",
    sess: session,
  });
});
router.post("/login", (req, res) => {
  let email = req.body.userId;
  let pw = req.body.pw;
  let isValid = false;

  if (email.toLowerCase() != "mike@aol.com" || pw != "abc123") {
    res.render("login", {
      pagename: "login",
      status: "Invalid username/password.",
    });
  } else {
    session = req.session;
    session.username = "Mike";
    res.render("index", {
      pagename: "home",
      sess: session,
    });
  }
});

router.get("/logout", (req, res) => {
 req.session.destroy(()=>{
   res.render('index',{
    pagename: 'home'
  })
 })
});

module.exports = router;
