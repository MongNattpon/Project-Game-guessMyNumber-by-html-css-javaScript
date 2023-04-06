"use strict";

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscroe = 0;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  
  // When these is not input.
  if (!guess) {
    document.querySelector(".message").textContent = "No Number⛔!";

    // When player wins.
  } else if (guess === secretNumber) {
    if (score < 19) {
      document.querySelector(".message").textContent = "🎉 Correct Number";
      score++;
      document.querySelector(".score").textContent = score;
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.background = "green";
      document.querySelector(".number").style.width = "30rem";
      random();
      if(secretNumber < 5  ){
         document.querySelector(".showguess").textContent = "🕵️‍♀️ helper:  numbers will be low 📉"
      }else if(secretNumber  >= 6 && secretNumber < 10){
        document.querySelector(".showguess").textContent = " 🕵️‍♀️ helper: numbers will be high 📈"
      }else if(secretNumber >= 10 ){
        document.querySelector(".showguess").textContent = " 🕵️‍♀️ helper: numbers will be much higher 📈"
        return
      }

      
      

    } else {
      document.querySelector(".message").textContent = "🎉 You win the game";
      document.querySelector(".score").textContent = 20;
      document.querySelector("body").style.background = "#FF8C00";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = secretNumber;
      highscroe++;
      document.querySelector(".highscroe").textContent = highscroe;
      random();
      if(score=== 20){
            setTimeout(()=>{
              document.querySelector(".message").textContent = "Start guessing...";
            },2000)   
         return
      }
    }

    // When player guess is too high.
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = " 📈 too high";
      score = score - 1;
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundColor = "#222";
      document.querySelector(".showguess").textContent ="..."
    } else {
      score = 0;
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "💥 You lost the game";
      document.querySelector("body").style.backgroundColor = "#222";

      if (score === 0 && highscroe === 0) {
        setTimeout(() => {
          document.querySelector(".message").textContent = "Start guessing...";
          score = 20;
          document.querySelector(".score").textContent = score;
        }, 2000);
      }
    }

    // When player guess is too low.
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = " 📉 too low ";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.background = "#222";
      document.querySelector(".showguess").textContent ="..."
    } else {
      score = 0;
      document.querySelector(".score").textContent = score;
      document.querySelector(".highscroe").textContent = highscroe;
      document.querySelector(".message").textContent = "💥 You lost the game";

      if (score === 0 && highscroe === 0) {
        setTimeout(() => {
          document.querySelector(".message").textContent = "Start guessing...";
          score = 20;
          document.querySelector(".score").textContent = score;
          document.querySelector(".guess").value = "";
        }, 2000);
      }else if(score === 0 && highscroe === 1 ){
          document.querySelector(".message").textContent = 
          "you have earned 15 points. 🎉🎉"
          setTimeout(()=>{
             score = 15;
             document.querySelector(".score").textContent = score;
            highscroe = 0;
            document.querySelector(".highscroe").textContent = highscroe;

          },1000)

      }else if(score === 0){
         highscroe--;
      }else if(highscroe === 0){
         document.querySelector(".highscroe").textContent = 0;
      }else{
         document.querySelector(".highscroe").textContent = highscroe;
      }

      
             



    }
  }
});

document.querySelector(".again").addEventListener("click", random);

function random() {
   secretNumber = Math.floor(Math.random() * 20) + 1;
  setTimeout(() => {
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
  }, 3000);
  
  
}



