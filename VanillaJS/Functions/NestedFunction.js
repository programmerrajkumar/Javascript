// The following variables are defined in the global scope
var num1 = 20,
    num2 = 3,
    name = 'john';

// This function is defined in the global scope

function multiply() {
    return num1 * num2;
}

multiply(); // Returns 60


//a function can access all variables and functions defined inside the scope in which it is defined.
// Likewise . A function defined inside another function can also access all variables defined in its parent function, and any other variables to which the parent function has access

// A nested function example
function getScore() {
    var num1 = 2,
        num2 = 3;

    function add() {
        return name + ' scored ' + (num1 + num2);
    }

    return add();
}

getScore(); // Returns "john scored 5"

//Nested functions & scopes
function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give
// it
result = fn_inside(5); // returns 8

// Since each call provides potentially different arguments, a new closure is created for each call to outside.

result1 = outside(10)(5); // returns 15


function A(x) {
    function B(y) {
        function C(z) {
            console.log(x + y + z);
        }
        C(3);
    }
    B(2);
}
A(1);


//Name conflicts
//the inner-most scope takes the highest precedence, while the outer-most scope takes the lowest
function outside() {
    var x = 5;
    function inside(x) {
        return x * 2;
    }
    return inside;
}

outside()(10); // returns 20 instead of 10