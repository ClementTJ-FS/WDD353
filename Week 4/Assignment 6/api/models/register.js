const mongoose = require("mongoose");
const registerSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  consent: {
    type: Boolean,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Register", registerSchema);

