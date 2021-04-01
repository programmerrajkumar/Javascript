//Normal Invoke Without This context
function Product(name, price) {
    console.log(name);
}

Product();

//this keyword used
function f1() {
    this.a = ""; //adds prop to global context if used as func not as constructor
    return this;
}

f1();

//Equivalent TO

f1.call(null);
f1.call(undefined);
f1.call(this);
f1.call(window);
f1.call(globalThis);


//'this' will default to the global object
f1() === window && globalThis; // true


function f2() {
    'use strict'; // see strict mode
    return this;
}

f2() === undefined; // true

/*
To Override the default 'this' context use call(),apply(),bind()
call(thisArg,arg1,arg2,..) accepts any number of parameter
apply(thisArg,args[]]) same as call but accept only one array parameter
bind(thisArg,,arg1,arg2,..) : Returns new wrapped func which uses thisArg internally if newfunc is invoked

thisArgs -  primitive values will be converted to objects.
            null and undefined is converted to global object
*/

//call()

var person = { name: "A1", Age: 30 };
function MakePersonAsEmployee(salary) {
    this.salary = salary;
    return this;
}
var employee = MakePersonAsEmployee.call(person, 100);
console.log(employee); //{name: "A1"; Age: 30; Salary: 100} if MakePersonAsEmployee is used as function(not as construtor) this will affect context obj

const animals = [
    { species: 'Lion', name: 'King' }
];

for (let i = 0; i < animals.length; i++) {
    (function (i) {
        this.print = function () { console.log(this.species + this.name); }
        this.print();
    }).call(animals[i], i);
}


//apply

const numbers = [5, 6, 2, 3, 7];


Math.max(5, 6, 2, 3, 7); //can't pass array directly so use apply


// using Math.min/Math.max apply
let max = Math.max.apply(null, numbers);


//bind() - works only once bind won't work for bounded function
this.x = 9;    // 'this' refers to global 'window' object here in a browser
const module = {
    x: 42,
    getX: function () {
        return this.x;
    },
    addArguments: function (arg1, arg2) {
        return this.x + arg1 + arg2;
    },
    addAsync: function (arg1, arg2) {
        window.setTimeout(this.addArguments.bind(this), 1000); //SetTimeout uses global object for 'this'
    }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // returns 9; The function gets invoked at the global scope

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX()); // expected output: 42

const unboundaddArguments = module.addArguments;
const boundaddArguments = unboundaddArguments.bind(module, 1/* arg1 */);
boundaddArguments(2); // 42 + 1 +2 =45
boundaddArguments(2, 3); // 42 + 1 +2 =45 Extra arg is skipped

function f() {
    return this.a;
}

var g = f.bind({ a: 'qwerty' });
console.log(g()); // qwerty

var h = g.bind({ a: 'yoo' }); // bind only works once!
console.log(h()); // qwerty

var o = { a: 37, f: f, g: g, h: h };
console.log(o.a, o.f(), o.g(), o.h()); // 37,37, qwerty, qwerty

//creating shortcut

const slice = Array.prototype.slice;

slice.apply(arguments);

const unboundSlice = Array.prototype.slice;
const slice = Function.prototype.apply.bind(unboundSlice);

slice(arguments)


//Arrow functions
//'this' retains the value of the enclosing lexical context's 'this'
var obj = { func: foo };
var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject && obj.func() === globalObject && foo.call(obj) === globalObject); // true