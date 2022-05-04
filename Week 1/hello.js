const readline = require("readline");

// //output
// console.log("Hello World");

//input
//create readline interface
rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

//output question
rl.question("What is your name? ", (name)=>{
  rl.question("What is your favorite color? ", (color)=>{
    console.log(`${name}'s favorite color is ${color}`);
    rl.close();
  });
});

//exit process
rl.on("close", ()=>{
  console.log("bye");
  process.exit();
});