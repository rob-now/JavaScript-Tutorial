var newLi = document.createElement("li");

var newA = document.createElement("a");

var myDiv = document.getElementById("first-list").getElementsByTagName("ul")[0];

myDiv.appendChild(newLi);

newLi.appendChild(newA);

newA.innerHTML = "Fourth";

newA.setAttribute("href", "#");

myDiv.insertBefore(newLi, myDiv.getElementsByTagName("li")[0]);