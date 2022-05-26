const axios = require('axios')
require('dotenv').config();

const getRegister = async (data)=>{
  return await axios.post(process.env.service_url, data)
}

module.exports = getRegister;