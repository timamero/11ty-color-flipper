const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".btn")
const color = document.querySelector(".hex-number");

btn.addEventListener('click', function() {
    var randomNumber = "#"
    for (let i = 0; i < 6; i++) {
        randomNumber += hex[getRandom()];
    }
    
    document.body.style.backgroundColor = randomNumber;
    color.textContent =  randomNumber;
});

function getRandom() {
    return Math.floor(Math.random() * hex.length);
};
