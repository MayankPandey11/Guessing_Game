const max = prompt("Guess the maximum No :");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the No : ");

while (true) {
  if (guess == "quit") {
    console.log("User Quit");
    break;
  }
  if (guess == random) {
    console.log("you are right ! Congrats !! random no was ", random);
    break;
  } else if (guess < random) {
    guess = prompt("Hint : Your  number is smaller, Guess again : ");
  } else {
    guess = prompt("Hint : Your  number is Higher, Guess again : ");
  }
}
