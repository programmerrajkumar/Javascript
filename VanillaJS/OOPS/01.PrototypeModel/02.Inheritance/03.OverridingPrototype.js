function foo() { }
foo.prototype = {
    foo_prop: "foo val"
};
function bar() { }

// Technique 1
var proto = new foo;
proto.bar_prop = "bar val";
bar.prototype = proto;
var inst = new bar;
console.log(inst.foo_prop);
console.log(inst.bar_prop);


// Technique 2
var proto = Object.create(
    foo.prototype
);
proto.bar_prop = "bar val";
bar.prototype = proto;
var inst = new bar;
console.log(inst.foo_prop);
console.log(inst.bar_prop);

//3

var proto = Object.create(
    foo.prototype,
    {
        bar_prop: {
            value: "bar val"
        }
    }
);

//4

var proto = {
    bar_prop: "bar val"
};
Object.setPrototypeOf(
    proto, foo.prototype
);
bar.prototype = proto;
var inst = new bar;
console.log(inst.foo_prop);
console.log(inst.bar_prop);

//5
var proto = Object.setPrototypeOf(
    { bar_prop: "bar val" },
    foo.prototype
);
bar.prototype = proto;
var inst = new bar;
console.log(inst.foo_prop);
console.log(inst.bar_prop)

//6

var proto = {
    bar_prop: "bar val",
    __proto__: A.prototype
};
bar.prototype = proto;
var inst = new bar;
console.log(inst.foo_prop);
console.log(inst.bar_prop);

//7

var inst = {
    __proto__: {
        bar_prop: "bar val",
        __proto__: {
            foo_prop: "foo val",
            __proto__: Object.prototype
        }
    }
};
console.log(inst.foo_prop);
console.log(inst.bar_prop)