//Arrow functions
//shorter syntax compared to function expressions and does not have its own this, arguments, super, or new.target
//'this' is inherited from the enclosing(parent) scope.
//Arrow functions are always anonymous

var a = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

var a2 = a.map(function (s) { return s.length; });

console.log(a2); // logs [8, 6, 7, 9]

var a3 = a.map(s => s.length);

//() => x is short for () => { return x; }).

console.log(a3); // logs [8, 6, 7, 9]



// Until arrow functions, every new function defined its own this value (a new object in the case of a constructor
//     , undefined in strict mode function calls, the base object if the function is called as an "object method", etc.)
//  This proved to be less than ideal with an object-oriented style of programming.

function Person() {
    // The Person() constructor defines `this` as itself.
    this.age = 0;

    setInterval(function growUp() {
        // In nonstrict mode, the growUp() function defines `this`
        // as the global object, which is different from the `this`
        // defined by the Person() constructor.
        this.age++;
    }, 1000);
}

var p = new Person(); // context of this is p

// this is fixed by using local variable
function Person() {
    var self = this;
    self.age = 0;

    setInterval(function growUp() {
        // The callback refers to the `self` variable of which
        // the value is the expected object.
        self.age++;
    }, 1000);
}

// Arrow function fixes this problem since it doesn't have it own 'this'context

function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++; // |this| properly refers to the person object
    }, 1000);
}

var p = new Person();



