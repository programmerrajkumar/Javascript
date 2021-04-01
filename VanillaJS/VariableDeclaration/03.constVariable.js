//const - block-scoped, read-only named constant,can't be re-assignment or re-declared
//initailization is must

//const: A constant cannot change value through assignment or be re-declared while the script is running. It must be initialized to a value.
//cannot declare a constant with the same name as a function or variable in the same scope

// define MY_FAV as a constant and give it the value 7
const MY_FAV = 7;

// this will throw an error - Uncaught TypeError: Assignment to constant variable.
MY_FAV = 20;

// MY_FAV is 7
console.log('my favorite number is: ' + MY_FAV);

// trying to redeclare a constant throws an error
// Uncaught SyntaxError: Identifier 'MY_FAV' has already been declared
const MY_FAV = 20;

// the name MY_FAV is reserved for constant above, so this will fail too
var MY_FAV = 20;

// this throws an error too
let MY_FAV = 20;

const MY_OBJECT = { 'key': 'value' };
MY_OBJECT.key = 'otherValue';

const MY_ARRAY = ['HTML', 'CSS'];
MY_ARRAY.push('JAVASCRIPT');
console.log(MY_ARRAY); //logs ['HTML','CSS','JAVASCRIPT'];


const c = 1;
{
    const c = 2;
}
console.log(c); // logs 1 and does not throw SyntaxError...

// THIS WILL CAUSE AN ERROR
// function f() {};
// const f = 5;

// // THIS WILL CAUSE AN ERROR TOO
// function f() {
//   const g = 5;
//   var g;

//   //statements
// }