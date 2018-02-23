var content = document.getElementById("content");
var showMoreBtn = document.getElementById("show-more");

showMoreBtn.onclick = function(){
    if (content.className === "open") {
        // Shrink the box
        // Erase the class name of open
        content.className = "";
        // Change inner HTML
        showMoreBtn.innerHTML = "Show more";
    } else {
        // Expand the box
        // Give class "open" to the "#content"
        content.className = "open";
        // Change inner HTML
        showMoreBtn.innerHTML = "Show less";
    }
};