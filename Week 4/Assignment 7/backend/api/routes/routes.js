const express = require("express");
const router = express.Router();
const postRegister = require("../../db/db");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up.",
    method: req.method,
  });
});

router.post("/register", async (req, res) => {
  //set the values from form
  let fName = req.body.fName,
    lName = req.body.lName,
    address = req.body.address,
    city = req.body.city,
    state = req.body.state,
    zip = req.body.zip,
    age = req.body.age,
    gender = req.body.gender,
    consent = req.body.consent,
    bio = req.body.bio,
    //objects/vars to hold data
    errors = {},
    values = {
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
    data = { errors, values };

  //the regexs
  const textRegex = /^[a-z]+$/i,
  addRegex = /^[a-z0-9\s,.'-]{3,}$/i,
  stateRegex =
    /^((A[LKSZR])|(C[AOT])|(D[EC])|(F[ML])|(G[AU])|(HI)|(I[DLNA])|(K[SY])|(LA)|(M[EHDAINSOT])|(N[EVHJMYCD])|(MP)|(O[HKR])|(P[WAR])|(RI)|(S[CD])|(T[NX])|(UT)|(V[TIA])|(W[AVIY]))$/i,
  zipRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

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
  if (bio.length >= 10) {
    delete errors.bioMsg;
  } else {
    errors.bioMsg = "A bio is required. (Minimum 10 characters)";
  }

  const isEmpty = Object.keys(errors).length === 0;
  if (isEmpty) {
    values = {};
    consent = "";
    gender = "";
    bio = "";
    await postRegister(data)
      .then((result) => {
        res.status(200).json({
          message: "Registration saved",
          status: 200,
          register: {
            fName: result.fName,
            lName: result.lName,
            address: result.address,
            city: result.city,
            state: result.state,
            zip: result.zip,
            age: result.age,
            gender: result.gender,
            consent: result.consent,
            bio: result.bio,
            metadata: {
              hostname: req.hostname,
              method: req.method,
            },
          },
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Registration failed",
          status: 500,
          error: {
            message: err.message,
            metadata: {
              hostname: req.hostname,
              method: req.method,
            },
          },
        });
      });
  } else if (!isEmpty) {
    res.status(500).json({
      message: "Registration failed",
      status: 500,
      error: {
        message: errors,
        metadata: {
          hostname: req.hostname,
          method: req.method,
        },
      },
    });
  }
});

module.exports = router;
