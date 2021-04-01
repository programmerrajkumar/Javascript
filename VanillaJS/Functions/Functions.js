//Function
function Test() { }

//Function Expression
var test = function () { }

//Method(function that is a property of an object)
var obj = { getname: function () { } }
obj.getname();

//Self Invoking function
(function () {
    alert('Self invoked');
})()

//Recursive call
//NAmed func expression is useful in this case and while debug call stack
var foo = function bar() {
    //all are equivalent
    bar();
    arguments.callee();
    foo();
}


//Default Parameter
function Test(x, y) {
    y = typeof y === undefined ? 0 : y;
    // function code
}
//ECMA 2015
function Test(x, y = 2) {
    // function code
}

//arguments object like params in c#
function myConcat(separator) {
    var result = ''; // initialize list
    var i;
    // iterate through arguments
    for (i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    return result;
}
myConcat(', ', 'red', 'orange', 'blue');

//Rest parameters

function multiply(multiplier, ...theArgs) {
    return theArgs.map(x => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]



