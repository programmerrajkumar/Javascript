// allows an iterable( zero or more ) to  be expanded in places for
// arguments (for function calls) , elements (for array literals),key-value pairs (for object literals) 

function sum(x, y, z) {
    return x + y + z;
}
let person = { name: "name1", age: 30 };
let personAddress = { address: "person Address" };
const numbers = [1, 2, 3];
let numberStore = [0, 1, 2];


sum(...numbers);
numberStore = [...numberStore, ...numbers];
let personObj = { ...person, ...personAddress };


//Rest Parameter
//allows to pass n number of parameter to function
//similar to arguments object inside function
//arguments has additional finctionality like arguments.callee,arguments.length,arguments[@@iterator]

function multiply(multiplier, ...theArgs) {
    return theArgs.map(element => {
        return multiplier * element
    })
}