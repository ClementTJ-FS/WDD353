const http = require("http");
const express = require("express");
const app = express();

//serve css and static files
app.use(express.static(__dirname));

app.get("/", (req, res)=>{
  res.sendFile(__dirname + "/home.html")
});

app.get("/about", (req, res)=>{
  res.sendFile(__dirname + "/about.html")
});

//server run
http.createServer(app).listen(8085,()=>{
  console.log(`Server running on port 8085`);
});