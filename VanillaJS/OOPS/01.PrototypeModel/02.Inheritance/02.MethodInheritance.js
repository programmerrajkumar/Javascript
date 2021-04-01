/*
When an inherited function is executed, 
"this" points to the inheriting object, 
not to the prototype object where the function is an own property.
*/

var o = {
    a: 2,
    m: function () {
        return this.a + 1;
    }
};

console.log(o.m()); // 3
// 'this' refers to o

var p = Object.create(o);
// p inherits from o

p.a = 4; // creates a property 'a' on p
console.log(p.m()); // 5
// 'this' refers to p.


function doSomething() { }
doSomething.prototype.foo = "bar";
console.log(doSomething.prototype);
/*

{
    foo: "bar",
    constructor: ƒ doSomething(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}
*/
function doSomething() { }
doSomething.prototype.foo = "bar"; // add a property onto the prototype
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // add a property onto the object
console.log(doSomeInstancing);

/*
{
    prop: "some value",
    __proto__: {
        foo: "bar",
        constructor: ƒ doSomething(),
        __proto__: {
            constructor: ƒ Object(),
            hasOwnProperty: ƒ hasOwnProperty(),
            isPrototypeOf: ƒ isPrototypeOf(),
            propertyIsEnumerable: ƒ propertyIsEnumerable(),
            toLocaleString: ƒ toLocaleString(),
            toString: ƒ toString(),
            valueOf: ƒ valueOf()
        }
    }
}

var o = new Foo();

//What actually JavaScript does in background is

var o = new Object();
o.__proto__ = Foo.prototype;
Foo.call(o);
*/

function doSomething() { }
doSomething.prototype.foo = "bar"; //added to prototype not function
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";
console.log("doSomeInstancing.prop:      " + doSomeInstancing.prop); //some value
console.log("doSomeInstancing.foo:       " + doSomeInstancing.foo);  //bar
console.log("doSomething.prop:           " + doSomething.prop);      //undefined(searches static prop of doSomething)
console.log("doSomething.foo:            " + doSomething.foo);       //undefined(searches static prop of doSomething)
console.log("doSomething.prototype.prop: " + doSomething.prototype.prop);//undefined
console.log("doSomething.prototype.foo:  " + doSomething.prototype.foo);//bar


function Graph() {
    this.vertices = [];
    this.edges = [];
}

Graph.prototype = {
    addVertex: function (v) {
        this.vertices.push(v);
    }
}
console.log(g.hasOwnProperty('vertices')); //true
console.log(Object.getPrototypeOf(g).hasOwnProperty('addVertex')); //true


var o = { a: 1 };
// o ---> Object.prototype ---> null

var b = ['yo', 'whadup', '?'];
// b ---> Array.prototype ---> Object.prototype ---> null

function f() {
    return 2;
}
// f ---> Function.prototype ---> Object.prototype ---> null

var g = new Graph();
// g ---> g.prototype ---> Object.prototype ---> null

var b = Object.create(a) || Object.create(a.prototype);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (inherited)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

