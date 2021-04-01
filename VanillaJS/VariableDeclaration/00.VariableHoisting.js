//Variable hoisting - you can refer to a variable declared later, without getting an exception

//variable declarations (and declarations in general) are processed before any code is executed
//declaring a variable anywhere in the code is equivalent to declaring it at the top
//variable can appear to be used before it's declared.
//variable declaration anywhere with in CURRENT FUNCTION(includes block statement not nested function) 
//OR OUTSIDE FUNCTION is moved to the TOP of the FUNCTION or GLOBAL code

console.log(x); // undefined
var x = 3; // var - gives undefined value

console.log(x); // ReferenceError
let x = 3;

function variablehoisting() {
    console.log(x === undefined); // true
    var x = 3;

    var myvar = 'my value';

    (function () {
        console.log(myvar); // undefined
        var myvar = 'local value';
    })();
}

//above function should be visualized as variablehoisting_VisualedAs()

function variablehoisting_VisualedAs() {
    var x;
    console.log(x === undefined); // true
    x = 3;

    var myvar = 'my value';

    (function () {
        var myvar;
        console.log(myvar); // undefined
        myvar = 'local value';
    })();
}


//Function hoisting - only function declarations are hoisted—but not the function expressions.

foo(); // "bar"

function foo() {
    console.log('bar');
}

/* Function expression */

baz(); // TypeError: baz is not a function

var baz = function () {
    console.log('bar2');
};








