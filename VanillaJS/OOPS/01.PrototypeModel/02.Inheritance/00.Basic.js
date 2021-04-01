function Animal() {

}
Animal.prototype.speak = function () {
    console.log(`${this.name} makes a noise.`);
}
function Dog() {

}
Dog.prototype.run = function () {

}

//Dog Inherits Animal
Object.setPrototypeOf(Dog.prototype, Animal.prototype);
console.log(Dog.prototype);

/**
    run: ƒ ()
    constructor: ƒ Dog()
    __proto__:
        speak: ƒ ()
        constructor: ƒ Animal()
        __proto__: Object
            constructor: ƒ Object()
            hasOwnProperty: ƒ hasOwnProperty()
 */

/**
 * {run: ƒ}run: ƒ run()arguments: (...)caller: (...)length: 0name: "run"__proto__: ƒ ()[[FunctionLocation]]: VM828:8[[Scopes]]: Scopes[2]__proto__: speak: ƒ speak()__proto__: Object
 */



const Animal = {
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
};

const Dog = {
    run() {

    }
}
Object.setPrototypeOf(Dog, Animal);
console.log(Dog.prototype);
/**
    run: ƒ run()
    __proto__:
        speak: ƒ speak()
        __proto__: Object
            constructor: ƒ Object()
            hasOwnProperty: ƒ hasOwnProperty()
 */