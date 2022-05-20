const http = require("http")
require("dotenv").config()
const app = require("./app/app")

//create server
http.createServer(app).listen(process.env.port, ()=>{
  console.log(`Server is running on port: ${process.env.port}`);
})

