const numberOfButton = document.querySelectorAll(".drum");
for (i = 0; i < numberOfButton.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    const buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      const audioCrash = new Audio("sounds/crash.mp3");
      audioCrash.play();
      break;
    case "a":
      const audioKick = new Audio("sounds/kick-bass.mp3");
      audioKick.play();
      break;
    case "s":
      const audioSnare = new Audio("sounds/snare.mp3");
      audioSnare.play();
      break;
    case "d":
      const audiotom1 = new Audio("sounds/tom-1.mp3");
      audiotom1.play();
      break;
    case "j":
      const audiotom2 = new Audio("sounds/tom-2.mp3");
      audiotom2.play();
      break;
    case "k":
      const audiotom3 = new Audio("sounds/tom-3.mp3");
      audiotom3.play();
      break;
    case "l":
      const audiotom4 = new Audio("sounds/tom-4.mp3");
      audiotom4.play();
      break;

    default:
      console.log();
      break;
  }
}
function buttonAnimation(key) {
  const activeBtn = document.querySelector("." + key);
  activeBtn.classList.add("pressed");
  setTimeout(function () {
    activeBtn.classList.remove("pressed"), 100;
  });
}
