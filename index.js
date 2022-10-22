prompt('Welcome to my Guessing Game. Press Enter to continue')
const username = prompt("Enter Username");

console.log("Welcome", username);

// let points = 0;
// let levels = 1;
// let maxStage = 10;

for (let i = 2; i < 10; i++) {
  let comGuess = Math.floor(Math.random() * i) + 1;
  let userGuess = parseInt(prompt(`Enter a number between 1 and ${i}.`));

  if (comGuess === userGuess) {
    prompt("Congratulations!! You guess correctly. Onto the next Level");
  } else {
    userGuess = prompt("Wrong. Please Try Again.");
    break;
  }

  console.log(userGuess)
}