//a mixin provides methods that implement a certain behavior,
//but we do not use it alone, we use it to add the behavior to other classes.
//like  adding  flavors to Icecreams  instead of having pre mixed flavors
//https://medium.com/javascript-scene/functional-mixins-composing-software-ffb66d5e731c
/**
 * 
 * @param {*} Base class name
 * @returns anonymous class
 */
let calculatorMixin = Base => class extends Base {
    calc() { }
};

let randomizerMixin = Base => class extends Base {
    randomize() { }
};

class Foo {
    someFooMethod() {

    }
}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {
    someBarMethod() {

    }
}

/**
 Bar.prototype
    constructor: class Bar
    someBarMethod: ƒ someBarMethod()
    __proto__: Object
        calc: ƒ calc()
        constructor: class extends
        __proto__: Foo
            constructor: class extends
            randomize: ƒ randomize()
            __proto__:
                constructor: class Foo
                someFooMethod: ƒ someFooMethod()
                __proto__: Object
                    Inbuilt methods
 */