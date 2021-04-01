//Primitive types(value type,immutable)
string
number
bigint
boolean
undefined
symbol
null

// Using a string method doesn't mutate the string
var bar = "baz";
console.log(bar);               // baz
bar.toUpperCase();
console.log(bar);               // baz

// Using an array method mutates the array
var foo = [];
console.log(foo);               // []
foo.push("plugh");
console.log(foo);               // ["plugh"]

// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase();       // BAZ


//Except null and undefined.all primitive values have object equivalents that wrap around the primitive values:
String 
Number
BigInt
Boolean
Symbol

