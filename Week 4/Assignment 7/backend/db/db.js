const mongoose = require("mongoose");
const Register = require("../api/models/register");

//function to save data to db
const postRegister = async (data) => {
  const register = new Register({
    _id: mongoose.Types.ObjectId(),
    fName: data.values.fName,
    lName: data.values.lName,
    address: data.values.address,
    city: data.values.city,
    state: data.values.state,
    zip: data.values.zip,
    age: data.values.age,
    gender: data.values.gender,
    consent: data.values.consent,
    bio: data.values.bio,
  });

  return await register.save();
};

module.exports = postRegister;


