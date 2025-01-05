const location1 = 3
const location2 = 4
const location3 = 5

let isSunk = false
let guess
let hits = 0

while (isSunk === false) {
guess = +prompt("Fire! Enter a number 0-6")
if (guess === location1 || guess === location2 || guess === location3){
    alert("HIT!")
    hits = hits + 1 
    if(hits === 3) {
        isSunk = true
        alert("You sank my battleship!")
    }
} else { 
    alert("MISS!")
}
}  