/*
Static Method or Prop
can only be access through Function name
*/

function Person(first, last, age) {
    this.name = {
        'first': first,
        'last': last
    };
    this.age = age;
}

Person.GetHeight = function () {

}
Person.customprototype = {};
