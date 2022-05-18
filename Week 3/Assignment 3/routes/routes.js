const express = require("express");
const router = express.Router();
const { check, body, validationResult } = require("express-validator");

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

router.post("/register", (req, res) => {
  const fName = req.body.fName;
  const lName = req.body.lName;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;
  const age = req.body.age;
  const gender = req.body.gender;
  const consent = req.body.consent;
  const bio = req.body.bio;

  const textRegex = /^[a-z]+$/i;
  const addRegex = /^[a-z0-9\s,.'-]{3,}$/i;
  const stateRegex = 	
  /^((A[LKSZR])|(C[AOT])|(D[EC])|(F[ML])|(G[AU])|(HI)|(I[DLNA])|(K[SY])|(LA)|(M[EHDAINSOT])|(N[EVHJMYCD])|(MP)|(O[HKR])|(P[WAR])|(RI)|(S[CD])|(T[NX])|(UT)|(V[TIA])|(W[AVIY]))$/i;
  const zipRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

  let errors = {};
  let status 

  if (textRegex.test(fName) && fName.length >= 2) {
    delete errors.fNameMsg
  } else {
    errors.fNameMsg = "A first name is required. (Minimum 2 characters)";
  }
  if (textRegex.test(lName) && lName.length >= 2) {
    delete errors.lNameMsg 
  } else {
    errors.lNameMsg = "A last name is required. (Minimum 2 characters)";
  }
  if (addRegex.test(address)) {
    delete errors.addressMsg 
  } else {
    errors.addressMsg = "An address name is required.";
  }
  if (textRegex.test(city) && city.length >= 2) {
    delete errors.cityMsg 
  } else {
    errors.cityMsg = "A city is required. (Minimum 2 characters)";
  }
  if (stateRegex.test(state)) {
    delete errors.stateMsg 
  } else {
    errors.stateMsg = "A state is required. (2 character abbreviation)";
  }
  if (zipRegex.test(zip) && zip.length >= 5) {
    delete errors.zipMsg 
  } else {
    errors.zipMsg = "A valid zip code is required.";
  }
  if (age != undefined) {
    delete errors.ageMsg 
  } else {
    errors.ageMsg = "An age is required.";
  }
  if (gender === "male" || gender === "female") {
    delete errors.genderMsg 
    console.log(gender);
  } else {
    errors.genderMsg = "A gender is required.";
  }
  if (consent === "on") {
    delete errors.consentMsg
    
  } else {
    errors.consentMsg = "Consent is required.";
  }
  if (textRegex.test(bio) && bio.length >= 10) {
    delete errors.bioMsg 
  } else {
    errors.bioMsg = "A bio is required. (Minimum 10 characters)";
  }

  const isEmpty = Object.keys(errors).length === 0;
  if (isEmpty) {
    status = "Registration Successful!"
  }else if(!isEmpty){
    status = "Registration Failed!"
  }
  console.log(errors);
  res.render("register", {
    pagename: "register",
    errors: errors,
    status: status,
  });
});

module.exports = router;
