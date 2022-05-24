const express = require("express");
const router = express.Router();
const postRegister = require("../../db/db");

router.get("/", () => {
  res.status(200).json({
    message: "Server is up.",
    method: req.method,
  });
});

router.post("/register", (req, res) => {
  postRegister(req)
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "Registration saved",
        status: 200,
        register: {
          fName: req.body.fName,
          lName: req.body.lName,
          address: req.body.address,
          city: req.body.city,
          state: req.body.state,
          zip: req.body.zip,
          age: req.body.age,
          gender: req.body.gender,
          consent: req.body.consent,
          bio: req.body.bio,
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
});

module.exports = router;
