// Grabbing title and storing it in variable
var title = document.getElementById("page-title");
// Changing font color of title on click
title.onclick = function(){
    this.style.color = "#eda";
};
// Changing background color of title on mouse wheel or touchpad scroll
title.onmousewheel = function (){
    this.style.backgroundColor = "#345";
};