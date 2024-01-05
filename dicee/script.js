let images = [
  "dice1.png",
  "dice2.png",
  "dice3.png",
  "dice4.png",
  "dice5.png",
  "dice6.png",
];

const img = document.querySelectorAll("img");
var roll = document.querySelector(".roll");

function changeValues() {
  let diceValue1 = Math.floor(Math.random() * 6);
  let diceValue2 = Math.floor(Math.random() * 6);
  document.querySelector(".img1").setAttribute("src", images[diceValue1]);
  document.querySelector(".img2").setAttribute("src", images[diceValue2]);

  if (diceValue1 > diceValue2) {
    var score = document.getElementById("score");
    score.innerHTML = "player1 is winner";
  } else if (diceValue2 > diceValue1) {
    var score = document.getElementById("score");
    score.innerHTML = "player 2 is winner";
  } 
  else if (diceValue1 === diceValue2) {
    var score = document.getElementById("score");
    score.innerHTML = "equal";
  }
  
}

roll.addEventListener("click", () => {
  for (let i = 0; i < img.length; i++) {
    img[i].classList.toggle("shake");
  }

  changeValues();
});
