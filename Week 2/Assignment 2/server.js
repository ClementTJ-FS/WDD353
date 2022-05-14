const http = require("http");
const express = require("express");
const app = express();

//serve css and static files
app.use(express.static(__dirname));

app.get("/", (req, res)=>{
  res.sendFile(__dirname + "/index.html")
});

app.get("/about", (req, res)=>{
  res.sendFile(__dirname + "/about.html")
});

app.get("/projects", (req, res)=>{
  res.sendFile(__dirname + "/projects.html")
});

app.get("/contact", (req, res)=>{
  res.sendFile(__dirname + "/contact.html")
});

//server run
http.createServer(app).listen(8085,()=>{
  console.log(`Server running on port 8085`);
});