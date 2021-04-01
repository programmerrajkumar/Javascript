//Object Literal
var simpleObj = {
    name: "",
    Address: "",
    getName: function () {
        return this.name;
    }
}
//Type 1:
//Create new instance of Object
function createNewPerson(name) {
    const obj = {};
    obj.name = name;
    obj.greeting = function () {
        alert('Hi! I\'m ' + obj.name + '.');
    };
    return obj;
}

let person1 = createNewPerson("p1");
let person2 = createNewPerson('p2');
//Type 2:
function Person(name) {
    this.name = name;
    this.greeting = function () {
        alert('Hi! I\'m ' + this.name + '.');
    };
    //returns 'this' implicitly if used with new keyword
}

let person1 = new Person('p1');
let person2 = new Person('p2');

/*
Object Metadata
{
  name: 'p1',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}

{
  name: 'p2',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}

function definition also be created each time. To avoid this use prototype
*/

//Type 3
let person1 = new Object(); //this creates empty object literal
person1.name = 'p1';
person1['age'] = 38;
person1.greeting = function () {
    alert('Hi! I\'m ' + this.name + '.');
};

let person1 = new Object({
    name: 'p1',
    age: 38,
    greeting: function () {
        alert('Hi! I\'m ' + this.name + '.');
    }
});


let person2 = Object.create(person1);