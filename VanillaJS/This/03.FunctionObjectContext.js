//when methods/property is invoked on the object 'this' will point to the particular object which is used to call method
//When a function is used as a constructor (with the new keyword), its this is bound to the new object being constructed.

var o = { prop: 37, sum: function () { return this.a + this.b; } };

function independent() {
    return this.prop;
}

o.f = independent;

console.log(o.f()); // 37


o.b = { g: independent, prop: 42 };
console.log(o.b.g()); // 42 if 'prop' is not found in g, returns undefined


var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.sum()); // 5
var tempsum = p.sum;
console.log(tempsum()); //undefined search in global object

//Function as Constructor

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}

function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'toy';
}

const cheese = new Food('feta', 5);
const fun = new Toy('robot', 40);


function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {
    return `${this.x},${this.y}`;
};

const p = new Point(1, 2);
p.toString();
// '1,2'

//  not supported in the polyfill below,

//  works fine with native bind:

const YAxisPoint = Point.bind(null, 0/*x*/);

const emptyObj = {};
const YAxisPoint = Point.bind(emptyObj, 0/*x*/);

YAxisPoint(5); // works directly of emptyObj {x:0,y:10}

const axisPoint = new YAxisPoint(5); // works on copy of emptyObj
axisPoint.toString();                    // '0,5'

axisPoint instanceof Point;              // true
axisPoint instanceof YAxisPoint;         // true
new YAxisPoint(17, 42) instanceof Point; // true