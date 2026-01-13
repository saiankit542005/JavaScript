const choices = document.querySelectorAll(".choice");
const msgPrint = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;

//====================🔊 Sounds=====================

const winSound = new Audio(
  "https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3"
);
const loseSound = new Audio(
  "https://assets.mixkit.co/active_storage/sfx/2053/2053-preview.mp3"
);
const drawSound = new Audio(
  "https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3"
);

//===================forEach=======================

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    const userChoice = e.target.id;
    playGame(userChoice);
  });
});

//===================playGame=======================

const playGame = (userChoice) => {
  console.log("User choice = ", userChoice);
  //generate computer choice
  const compChoice = generateCompChoice();
  console.log("Computer choice = ", compChoice);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //compuert - > "rock" nhi hoga beause rock hoga to game draw hoga.
      //compuert -> scissors,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //comp -> scissors ,rock
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //user -> scissors
      //comp -> rock , paper
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

//===================playGame=======================

const generateCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

//===================drawGame=======================

const drawGame = () => {
  console.log("Game was draw!");
  drawSound.play();
  msgPrint.innerText = "Game was Draw , play again!";
  msgPrint.style.backgroundColor = "blue";
};

//===================showWinner=======================

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    console.log("You win!");
    userScore++;
    winSound.play();
    userScorePara.innerText = userScore;
    msgPrint.innerText = `Congratulations 🎉 win! Your ${userChoice} beats ${compChoice}`;
    msgPrint.style.backgroundColor = "green";
  } else {
    console.log("You lose!");
    compScore++;
    compScorePara.innerText = compScore;
    loseSound.play();
    msgPrint.innerText = `You lose!${compChoice} beats your ${userChoice}`;
    msgPrint.style.backgroundColor = "red";
  }
};

/**
<div class="choice">
  <img src="./images/rock.png" id="rock" />
</div>

👉 Image is inside div

Browser ka rule:=> 
Jab tum kisi child element (img) par event karte ho,
to wo event parent elements tak bubble hota hai

1️⃣ You click → on the image
2️⃣ The browser asks → "Who is the parent of the image?"
3️⃣ The parent is → the .choice div
4️⃣ A click listener is attached to .choice
5️⃣ Therefore, the event is triggered ✅

Is process ko bolte hain 👉 Event Bubbling

 */
