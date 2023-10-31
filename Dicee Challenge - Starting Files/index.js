var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector('img.img1').setAttribute('src', `./images/dice${randomNumber1}.png`);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector('img.img2').setAttribute('src', `./images/dice${randomNumber2}.png`);
var winner = document.querySelector('h1');
if (randomNumber1 > randomNumber2) {
  winner.innerHTML = 'Player 1 Wins!';
}
else if (randomNumber2 > randomNumber1){
  winner.innerHTML = 'Player 2 Wins!';
}
else {
  winner.innerHTML = 'Draw!';
}
