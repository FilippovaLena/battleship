const randomLoc = Math.floor(Math.random() * 5)
const location1 = randomLoc
const location2 = location1 + 1
const location3 = location2 + 1

let isSunk = false;
let guess;
let hits = 0;
let guesses = 0;

while (isSunk === false) {
    guess = +prompt("Fire! Enter a number 0-6")
    if (guess < 0 || guess > 6) {
        alert("Please, enter a valid cell number")
    } else {
        guesses = guesses + 1
        if (guess === location1 || guess === location2 || guess === location3) {
            alert("HIT!")
            hits = hits + 1
            if (hits === 3) {
                isSunk = true
                alert("You sank my battleship!")
            }
        } else {
            alert("MISS!")
        }
    }
}

const stats = "You have " + hits + " hits out of " + guesses + " shots."
alert(stats)