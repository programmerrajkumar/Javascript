//var:
// a variable declared within a block is local to the function (or global scope) that the block resides within it.
//   (the enclosing function and functions declared within it)
// Duplicate variable declarations will not trigger an error, even in strict mode,
// creates property on global variable(in func context "this" , in script context "window")
// in global context, a variable is added as a non-configurable property of the global object
//          to distinguish between global variables and manually added properties


'use strict';
var x = 1;
globalThis.hasOwnProperty('x'); // true
delete globalThis.x; // TypeError in strict mode. Fails silently otherwise.
delete x;  // SyntaxError in strict mode. Fails silently otherwise.

function GlovalVar() {
    test = 22; // global variable
    function GlovalVar_1() {
        test1 = 33; // global variable
    }
}

'use strict';
function foo() {
    var x = 1;
    function bar() {
        var y = 2;
        console.log(x); // 1 (function `bar` closes over `x`)
        console.log(y); // 2 (`y` in bar scope)
    }
    bar();
    console.log(x); // 1 (`x` is in scope)
    console.log(y); // ReferenceError in strict mode, `y` is scoped to `bar`
}

foo();


var x = 10;

function test() {
    function test_1() {
        var x = 20;
        function test_1() {
            x = 30; //search for x in current function scope and if not found search for first occurs of declaration of x in parent func from bottom to top.
            console.log(x); //30
        }
        console.log(x); //20
        test_2();
        console.log(x); //30
    }
    console.log(x); //10
    test_1();
    console.log(x);//10
}
// Here x is 10
test();

'use strict';
function varscope_childblock() {
    var x = 6;
    if (true) {
        var x = 5; // Duplicate variable declarations  since this is block statemnt not func
        var y = 7; // hoisting will occur(in immediate parent) since this is block statemnt not func

        console.log(x);  // x is 5
        console.log(y);  // y is 7
    }
    console.log(x);  // x is 5
    console.log(y);  // y is 7
}

'use strict';
function varscope_childfunc() {
    var x = 6;
    function varinside() {
        var x = 5; // New variable declaration.Not a Duplicate variable declarations  since this is func not block statemnt
        var y = 7; // hoisting will not occur(in parent func) since this is func not block statement
        console.log(x);  // x is 5
        console.log(y);  // y is 7
    }
    varinside();
    console.log(x);  // x is 6
    console.log(y);  // y is  error since it is not declared in current scope
}
varscope_childfunc();




var x = 0; // Declares x within file scope, then assigns it a value of 0.
var bb = 10;
function a() {
    console.log(bb); //  10 . since no variable with same name  in this func scope so no hoisting
    console.log(x); // undefined since hoisting will take place because of var x = 9;
    var x = 9;
    var y = 2; // Declares y within scope of function a, then assigns it a value of 2.
    console.log(x, y); // 9 2

    function b() {
        x = 3; // Assigns 3 to x in scope of a().
        y = 4; // Assigns 4 to existing outer y.
        z = 5; // Creates a new global variable z, and assigns it a value of 5.
        bb = 100; // Assigns 100 to bb in scope of script file.
        // (Throws a ReferenceError in strict mode.)
    }

    b(); // Creates z as a global variable.
    console.log(x, y, z,bb); // 3 4 5 100
}

a(); // Also calls b.
console.log(x, z);     // 3 5
console.log(typeof y); // "undefined", as y is local to function a


