const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const player1 = document.querySelector(".img1");
const player2 = document.querySelector(".img2");
const heading = document.querySelector("h1");
const newSrc1 = "images/dice" + randomNumber1 + ".png";
const newSrc2 = "images/dice" + randomNumber2 + ".png";

player1.setAttribute("src", newSrc1);
player2.setAttribute("src", newSrc2);

if (newSrc1 > newSrc2) {
  heading.innerHTML = "Player 1 wins";
} else if (newSrc1 < newSrc2) {
  heading.innerHTML = "Player 2 wins";
} else {
  heading.innerHTML = "Draw";
}
