var shape = document.getElementById("color-changer");
var colors = ["green", "blue", "red", "yellow", "pink"];
var counter = 0;

function changeColor() {
    if (counter >= colors.length) {
        counter = 0;
    }

    shape.style.background = colors[counter];
    counter++;
}

var myTimer = setInterval(changeColor, 3000);

shape.onmouseover = function (){
    clearInterval(myTimer);
    shape.innerHTML = "Timer stopped on mouse over";
};