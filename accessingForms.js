var myForm = document.forms.myForm;

myForm.name; // returns element with name="name"

myForm.name.value; // "" - empty string, if we write something in the form then it returns that value

myForm.colour.value; // "Red" - returns what is chosen

// Change the border of form when on focus
myForm.name.onfocus = function (){
    myForm.name.style.border = "4px solid red";
};

// Restore the border by using onblur (out of focus)
myForm.name.onblur = function (){
    myForm.name.style.border = "1px solid black";
};