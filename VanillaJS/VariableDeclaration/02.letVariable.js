
//let - block-scoped, local variable, optionally initializing it to a value.
//does not create properties of the window object when declared globally (in the top-most scope).
// have scope in same  block and sub-blocks
function letTest() {
    let x = 1;
    let y = 22;
    {
        let x = 2;  // different variable
        console.log(x);  // 2
        console.log(y);  // 22 from parent block
    }
    console.log(x);  // 1
}

//does not create a property on the global object
var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined


//Redeclarations
// if (x) {
//     let foo; //this name is reserved by let 
//     let foo; // SyntaxError thrown.
//     var foo; // SyntaxError thrown.
//     const foo; // SyntaxError thrown.
// }

// let x = 1;
// switch (x) {
//     case 0:
//         let foo;
//         break;

//     case 1:
//         let foo; // SyntaxError for redeclaration.
//         break;
// }

//this works. because scope is created for each case statement
let x = 1;

switch (x) {
    case 0: {
        let foo;
        break;
    }
    case 1: {
        let foo;
        break;
    }
}

//Emulating private members

var Thing;

{
    let privateScope = new WeakMap();
    let counter = 0;

    Thing = function () {
        this.someProperty = 'foo';

        privateScope.set(this, {
            hidden: ++counter,
        });
    };

    Thing.prototype.showPublic = function () {
        return this.someProperty;
    };

    Thing.prototype.showPrivate = function () {
        return privateScope.get(this).hidden;
    };
}

console.log(typeof privateScope);
// "undefined"

var thing = new Thing();

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

thing.showPrivate();
// 1


//Temporal dead zone (TDZ)
//let variables cannot be read/written until they have been fully initialized

{ // TDZ starts at beginning of scope
    console.log(bar); // undefined
    //  console.log(foo); // ReferenceError
    // console.log(typeof i); // ReferenceError
    var bar = 1;
    let foo = 2; // End of TDZ (for foo)

    console.log(foo); // Called outside TDZ!
}

// TDZ combined with lexical scoping
function test() {
    var foo = 33;
    if (foo) { //here value of foo will be available foo is outside the scope of if
        //  let foo = (foo + 55); // ReferenceError
    }
}
test();

function go(n) {
    // n here is defined!
    console.log(n); // Object {a: [1,2,3]}

    for (let n of n.a) { // ReferenceError n is inside scope of for loop
        console.log(n);
    }
}

go({ a: [1, 2, 3] });


var a = 1;
var b = 2;
let x = 1;
if (a === 1) {
    var a = 11; // the scope is global
    let b = 22; // the scope is inside the if-block
    var x = 2; // SyntaxError for re-declaration
    console.log(a);  // 11
    console.log(b);  // 22
}

console.log(a); // 11
console.log(b); // 2