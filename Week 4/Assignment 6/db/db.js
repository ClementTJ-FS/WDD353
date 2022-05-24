const mongoose = require("mongoose");
const Register = require("../api/models/register");

const postRegister = async (req) => {
  const register = new Register({
    _id: mongoose.Types.ObjectId(),
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
  });

  return await register.save();
};

module.exports = postRegister;


