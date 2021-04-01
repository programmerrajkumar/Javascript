class Cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Lion extends Cat {
    speak() {
        console.log(`${this.name} roars.`);
    }
    fight() {

    }
}

//under the hood

function Cat() {

}
Cat.prototype.speak = function () {
    console.log(`${this.name} makes a noise.`);
}
function Lion() {

}
Lion.prototype.speak = function () {
    console.log(`${this.name} roars.`);
}
Lion.prototype.fight = function () {

}

