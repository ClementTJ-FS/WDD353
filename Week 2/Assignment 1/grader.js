const readline = require("readline");
class Grader {
  constructor() {
  //create interface
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    //get input
    rl.question("Enter Student Name: ", (student) => {
      rl.question("Enter Assignment: ", (assignment) => {
        rl.question("Enter Score: ", (score) => {
          //check if score is valid, if not create and use prompt.
          if (
            isNaN(score) ||
            score.trim() == "" ||
            parseFloat(score) < 0 ||
            parseFloat(score) > 100
          ) {
            rl.setPrompt(
              "Please only enter a number score from 0 to 100.\nEnter Score: "
            );
            rl.prompt();
            //read new line input, recheck.
            rl.on("line", (score) => {
              if (
                isNaN(score) ||
                score.trim() == "" ||
                parseFloat(score) < 0 ||
                parseFloat(score) > 100
              ) {
                rl.prompt();
              } else {
                //if prompted input correct, setGrade, close
                setGrade(student, assignment, score);
                rl.close();
              }
            });
          } else {
            //if initial input correct, setGrade, close
            setGrade(student, assignment, score);
            rl.close();
          }
        });
      });
    });

    //convert score to letter grade, output
    function setGrade(student, assignment, score) {
      let letterGrade = "A";
      if (score < 60) {
        letterGrade = "F";
      } else if (score < 70) {
        letterGrade = "D";
      } else if (score < 80) {
        letterGrade = "C";
      } else if (score < 90) {
        letterGrade = "B";
      }
      console.log(
        `\n- Student Name: ${student}\n- Assignemnt: ${assignment}\n- Grade: ${letterGrade}`
      );
    }
  }
}

//instantiate object
const g = new Grader();
