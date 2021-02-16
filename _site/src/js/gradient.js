const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const color1 = document.getElementById("hex-number-1");
const color2 = document.getElementById("hex-number-2");
const bgLeft = document.getElementById("body-background-left");
const bgRight = document.getElementById("body-background-right");

btn1.addEventListener('click', function() {
    var randomNumber1 = "#";
    for (let i = 0; i < 6; i++) {
        randomNumber1 += hex[getRandom()];
    }

    bgLeft.style.backgroundImage = "linear-gradient(to right, " + randomNumber1 + " 50%, #FFFFFF)";  
    color1.textContent = randomNumber1;
});

btn2.addEventListener('click', function() {
    var randomNumber2 = "#";
    for (let i = 0; i < 6; i++) {
        randomNumber2 += hex[getRandom()];
    }

    bgRight.style.backgroundColor = randomNumber2;
    bgRight.style.boxShadow = "-12.5vw 0px 100px 12.5vw" + randomNumber2;

    color2.textContent = randomNumber2;
});

function getRandom() {
    return Math.floor(Math.random() * hex.length);
};
