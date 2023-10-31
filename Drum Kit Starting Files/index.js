var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function (event) {
    console.log(event);
    // this.style.color = "white";
  });
}

document.addEventListener("keydown", function() {
  console.log(this);
})
// var audio = new Audio('./sounds/tom-1.mp3');
//     audio.play();