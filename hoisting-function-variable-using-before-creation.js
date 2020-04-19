/** 
 * Lecture: Hoisting 
 * Using functions or variable even before creation.
 * 
*/


// functions
calculateAge(1965); // works fine

function calculateAge(year) {
    console.log(2016 - year);
}

// function expression and does not work
retirement(1956); // failed in execution

var retirement = function(year) {
    console.log(65 - (2016 - year));
}

retirement(1956); // works fine

//===============================================
// variables

console.log(age); // undefined
var age = 23;

function foo() {
    console.log(age);
    var age = 65; // prints 65
    console.log(age);
}
foo();
console.log(age); // prints 23

/*********************************************************/



