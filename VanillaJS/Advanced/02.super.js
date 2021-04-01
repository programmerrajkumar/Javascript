/**
 * The super keyword is used to access and call functions on an object's parent.
 * syntax:
 * super([arguments]); // calls the parent constructor.
 * super.functionOnParent([arguments]);
 * delete  not supported
 */


var obj1 = {
    method1() {
        console.log('outside method 1');
    }
}

var obj2 = {
    method2() {
        super.method1();
        this.method1();
    },
    method1() {
        console.log('inside method 1');
    }
}

Object.setPrototypeOf(obj2, obj1);


class Rectangle {
    constructor(height, width) {
        this.name = 'Rectangle';
        this.height = height;
        this.width = width;
    }
    sayName() {
        console.log('Hi, I am a ', this.name + '.');
    }
    static logNbSides() {
        return 'I have 4 sides';
    }

}

class Square extends Rectangle {
    constructor(length) {
        super(length, length);
        this.name = 'Square';
    }

    sayName_1() {
        super.sayName();
        delete super.sayName();//Error
    }
    static logDescription() {
        return super.logNbSides() + ' which are all equal';
    }
}