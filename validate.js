$(document).ready(function(){
"use strict";  
function validate(){
    var x = document.forms['Myform']['username'].value;
if(x === "") {
        alert("Name must be filled out");
        return false;
    }
}    
    
});
