var base = { a: 1 };

var derived = Object.create(base);

console.log(base.a); // print 1
console.log(derived.a); // print 1
derived.a = 5;
console.log(base.a); // print 1
console.log(derived.a); // print 5



delete derived.a;

console.log(base.a); // print 1
console.log(derived.a); // print 1 (derived.a value 5 is deleted but it showing value from its prototype chain)
delete base.a;       // This can also be done via 'delete Object.getPrototypeOf(b).a'
console.log(base.a); // print undefined
console.log(derived.a); // print undefined