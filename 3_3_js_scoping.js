// scoping
// each function created own scope
// inner and outer function scope defined variable learning

var a = 'Hello';
first();

function first() {
    var b = 'Hi';

    second();

    function second() {
        var c = 'Hey';
        console.log("second scope" + a, b, c);
    }

    console.log("first Scope", a, b, c); // c creates error

}

console.log("outer scope", a, b, c); //uncaught reference error - b is not defined

