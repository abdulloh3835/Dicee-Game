function refresh() {
    location.reload();
}


// for the 1st dice to be changed randomly
var randomNumber1 = Math.floor((Math.random() * 6) + 1);

/* method 1 */
// var newSrc = "./images/dice" + randomNumber1 + ".png";
// console.log(newSrc);
// document.querySelector("img").src = newSrc;

// document.querySelector("img").src = "./images/dice" + randomNumber1 + ".png"

/* method 2 */
// document.querySelector("img").attributes[1].value = "./images/dice" + randomNumber1 + ".png";

/* method 3 */
document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");


// for the 2nd dice to be changed randomly
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");


// to change text of h1 element based on if 1st dice is bigger than 2nd dice or smaller or equal
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} 
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} 
else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
}