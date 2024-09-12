var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


// Function for changing dice image on left
function getNumber1() {
    if (randomNumber1 === 1) {
        document.querySelector(".img1").setAttribute("src", "assets/images/dice1.png");
    } else if (randomNumber1 === 2) {
        document.querySelector(".img1").setAttribute("src", "assets/images/dice2.png");
    } else if (randomNumber1 === 3) {
        document.querySelector(".img1").setAttribute("src", "assets/images/dice3.png");
    } else if (randomNumber1 === 4) {
        document.querySelector(".img1").setAttribute("src", "assets/images/dice4.png");
    } else if (randomNumber1 === 5) {
        document.querySelector(".img1").setAttribute("src", "assets/images/dice5.png");
    } else {
        document.querySelector(".img1").setAttribute("scr", "assets/images/dice6.png");
    }
}


// Function for changing dice image on right
function getNumber2() {
    if (randomNumber2 === 1) {
        document.querySelector(".img2").setAttribute("src", "assets/images/dice1.png");
    } else if (randomNumber2 === 2) {
        document.querySelector(".img2").setAttribute("src", "assets/images/dice2.png");
    } else if (randomNumber2 === 3) {
        document.querySelector(".img2").setAttribute("src", "assets/images/dice3.png");
    } else if (randomNumber2 === 4) {
        document.querySelector(".img2").setAttribute("src", "assets/images/dice4.png");
    } else if (randomNumber2 === 5) {
        document.querySelector(".img2").setAttribute("src", "assets/images/dice5.png");
    } else {
        document.querySelector(".img2").setAttribute("scr", "assets/images/dice6.png");
    }
}


// Function to show winner
function winnerNotification() {
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML="Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML="Player 2 Wins!";
    } else if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML="It's a Draw!";
    }
}

getNumber1();
// console.log(randomNumber1)
getNumber2();
// console.log(randomNumber2)
winnerNotification()