class Triple {
    static customName = 'Tripler';
    static description = 'I triple any number you provide';
    static triple(n = 1) {
        return n * 3;
    }
}

class BiggerTriple extends Triple {
    static longDescription;
    static description = 'I square the triple of any number you provide';
    static triple(n) {
        return super.triple(n) * super.triple(n);
    }
}

console.log(Triple.description);   // 'I triple any number you provide'
console.log(Triple.triple());      // 3
console.log(Triple.triple(6));     // 18

var tp = new Triple();

console.log(BiggerTriple.triple());         // 9 (not affected by parent's instantiation)
console.log(BiggerTriple.triple(3));        // 81 (not affected by parent's instantiation)
console.log(BiggerTriple.description);      // 'I square the triple of any number you provide'
console.log(BiggerTriple.longDescription);  // undefined
console.log(BiggerTriple.customName);       // 'Tripler'

console.log(tp.triple());         // 'tp.triple is not a function'.


//To call static method or property within another static method of the same class, you can use the this keyword

class StaticMethodCall {
    static staticProperty = 'static property';
    static staticMethod() {
        return 'Static method and ' + this.staticProperty + ' has been called';
    }
    static anotherStaticMethod() {
        return this.staticMethod() + ' from another static method';
    }
}
StaticMethodCall.staticMethod();
StaticMethodCall.anotherStaticMethod();


//Calling static members from a class constructor and other methods
/*
CLASSNAME.STATIC_METHOD_NAME() / CLASSNAME.STATIC_PROPERTY_NAME
         or
this.constructor.STATIC_METHOD_NAME() / this.constructor.STATIC_PROPERTY_NAME
*/

class StaticMethodCall {
    constructor() {
        console.log(StaticMethodCall.staticProperty); // 'static property'
        console.log(this.constructor.staticProperty); // 'static property'
        console.log(StaticMethodCall.staticMethod()); // 'static method has been called.'
        console.log(this.constructor.staticMethod()); // 'static method has been called.'
    }

    static staticProperty = 'static property';
    static staticMethod() {
        return 'static method has been called.';
    }
}