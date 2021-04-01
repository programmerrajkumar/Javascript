/* 
Note: Under the hood, your classes are being converted into Prototypal Inheritance models — this is just syntactic sugar.

only one constructor is allowed
 default constructor will be added if explicitly not mentioned
  For Base class   : constructor() {}
  For Derived Class: constructor(...args) {super(...args);} default constructor then takes care of args passing to base class
*/
//Hoisting is not supported
const p = new Rectangle(); // ReferenceError


//class declaration
class Rectangle { constructor() { } }

//class expression
let Rectangle = class { constructor() { } }; // unnamed
console.log(Rectangle.name); // output: "Rectangle"


let Rectangle = class Rectangle2 { constructor() { } }; // named
console.log(Rectangle.name); // output: "Rectangle2"


class Rectangle {
    height = 0; //this can be omitted but for more readability
    width;
    _area = 0;
    constructor(height, width) {
        //Instance properties
        this.height = height;
        this.width = width;
    }
    // Getter
    get area() {
        return this.calcArea();
    }

    //setter
    set area(newArea) {
        _area = newArea
    }

    // Prototype Method
    calcArea() {
        return this.height * this.width;
    }

    static displayName = "Rectangle";
    static IsSquare(h, w) {
        return w == h;
    }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100

console.log(Rectangle.IsSquare(1, 1));

Rectangle.staticWidth = 20;
Rectangle.prototype.prototypeWidth = 25;


