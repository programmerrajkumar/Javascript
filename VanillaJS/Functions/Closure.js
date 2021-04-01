//closure
// A closure is an expression (most commonly, a function) this means that a nested function can "inherit" the arguments and variables of its containing function(even after parent func has closed).
// A closure is created when the inner function is somehow made available to any scope outside the outer function.
//   Pros :Preservation of variables(of outer function)
//         Encapsulation(outer func can't access inner func arg & variables)


var pet = function (name) {   // The outer function defines a variable called "name"
    var getName = function () {
        return name;             // The inner function has access to the "name" variable of the outer
        //function
    }
    return getName;            // Return the inner function, thereby exposing it to outer scopes
}
myPet = pet('Vivie');

myPet();                     // Returns "Vivie"


var getCode = (function () {
    var apiCode = '0]Eal(eh&2';    // A code we do not want outsiders to be able to modify...

    return function () {
        return apiCode;
    };
})();

getCode();    // Returns the apiCode


var createPet = function (name) {
    return {
        setName: function (newName) {
            name = newName;
        },

        getName: function () {
            return name;
        },
    }
}

var pet = createPet('Vivie');
pet.getName();                  // Vivie
pet.setName('Oliver');