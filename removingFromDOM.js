// Grabbing the parent item
var parent = document.getElementById("first-list").getElementsByTagName("ul")[0];
// Grabbing the child item to remove
var child = parent.getElementsByTagName("li")[0];
// Removing child item from parent and storing removed item in variable
var removed = parent.removeChild(child);
// Restoring removed child to parent but at the end (as last child)
parent.appendChild(removed);
// Instead of the above we can use this:
// Restoring removed child to parent as first child
parent.insertBefore(removed, parent.getElementsByTagName("li")[0]);