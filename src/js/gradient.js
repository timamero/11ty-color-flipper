const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btns = document.querySelectorAll(".btn")
const color1 = document.getElementById("hex-1");
const color2 = document.getElementById("hex-2");
const body = document.body

let randomColor1 = "#FFFFFF";
let randomColor2 = '#FFFFFF';

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const classes = e.currentTarget.classList;
        if (classes.contains('btn-1')) {
            randomColor1 = getRandomHex();
            color1.textContent = randomColor1;
        } else if (classes.contains('btn-2')) {
            randomColor2 = getRandomHex();
            color2.textContent = randomColor2;
        }
        body.style.backgroundImage = "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
    })
})

function getRandomHex() {
    let randomHexNumber = "#";
    for (let i = 0; i < 6; i++) {
        randomHexNumber += hex[Math.floor(Math.random() * hex.length)];
    }
    return randomHexNumber;
};
