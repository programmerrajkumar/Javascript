// In web browsers, the window object is also the global object:
console.log(this === window); // true

a = 22;
console.log(window.a); // 22

this.b = "Test";
globalThis.c = "tt";

console.log(window.b)  // "Test"
console.log(b)         // "Test"
console.log(c)         // "Test"
