// File Operations with Node


// Nodejs is JavaScript that is designed to run on the server. It is a server-side JavaScript engine provided by Google.

// JavaScript is loose in syntax so you still do not have to define types just like Python,PHP, or Ruby.

// var myarr = ["joe","mike"];
// console.log(myarr);
// var myassoc = {"name":"mike","last":"stuff","more":[{"name":"joe"}]}
// console.log(myassoc["more"][0]["name"]);
// //with es6 you can actually use "class" and "require" for external classes
// //require("perons.js");
// class Car{
//   doors = function(type){
//   this.number=0;
//   if(type=="Toyota"){
//   this.number=4;
//   }else{
//   this.number = 2;
//   }
//   return this.number;
//   }
// }
// module.exports = Car;
// mycar = new Car();
// console.log(mycar.doors("Honda"));
// //you can run nodejs on the terminal by just typing node and the file you have created
// >>node myfile.js
// Let's do some simple operations with Node, we will then show some IO and the file system on the next lecture below

// const fs = require("fs");

// //read from file
// fs.readFile("file.txt", "utf8", (err, contents) =>{
//   if(err){
//     console.log(err.message);
//   }else{
//     console.log(contents);
//   };
// });

// //write to file
// fs.writeFile("file3.txt", "Test string from WDD353", "utf8", (err)=>{
//   if(err){
//     console.log(err.message);
//   }else{
//     console.log("File Written");
//   }
// })

//Working with console
const readline = require('readline');

//create interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

//get input
rl.question("What is your name? ", (name)=>{
  rl.question("What is your favorite color? ", (color)=>{
    console.log(name + " your favorite color is "+ color);
    process.exit(0);
  });
});