/*
Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance)
 is performed via reusing existing objects that serve as prototypes.

Prototype-based programming uses generalized objects, which can then be cloned and extended

 there are no explicit classes. Objects inherit directly from other objects through a special property called "prototype"

someObject.[[Prototype]] or someObject.__proto__ or Object.getPrototypeOf(someObject) 
     - is property of instance of object
    
func.prototype
    - is static property of function(Object)

 */


function Person(first, last, age) {
    this.name = {
        'first': first,
        'last': last
    };
    this.age = age;
}
//Person.prototype has constructor property by default
// this will add method to whole inheritance chain of Person dynamically 
Person.prototype.getName = function () {
    return this.name.first + this.name.last;
}
Person.prototype.getAge = function () {
    return this.age;
}


var person1 = new Person("f1", "l1", 12);

person1.getName();
person1.getAge();

console.log(person1);

/*
{
    age: 12,
    name :{
        'first': 'f1',
        'last': 'l1'
    }
}
Note: this doesn't have method definition in object. Because methods are added through prototype
*/

Person.prototype.getLastName = function () {
    return this.name.last;
}

person1.getLastName();


/*
   Inheriting from function using 'this'
*/
function Teacher(first, last, age, subject) {
    /*
       Person - Base Object
       Teacher - derived Object
       Inheriting the properties/method defined on Person(only those added using 'this' keyword) to 'this' of Teacher
       prototype of Person is not inherited
    */
    Person.call(this, first, last, interests);

    this.subject = subject;
}

/*
   Inheriting the properties/method defined on Person()'s prototype
*/


/*
This will replace the prototype of Teacher with object of Person. 
        default constructor func is removed.so add it manually
i.e Teacher.prototype = Person()
*/
Teacher.prototype = Object.create(Person.prototype);

//create constructor prop which got overridden by previuos step
Object.defineProperty(Teacher.prototype, 'constructor', {
    value: Teacher,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true
});

