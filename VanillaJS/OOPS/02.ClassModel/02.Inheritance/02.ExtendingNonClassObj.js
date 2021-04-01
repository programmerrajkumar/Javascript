/**
 * Note that classes cannot extend regular (non-constructible) objects
 */

const Animal = {
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
};

class Dog {
    constructor(name) {
        this.name = name;
    }
}

// If you do not do this you will get a TypeError when you invoke speak
Object.setPrototypeOf(Dog.prototype, Animal);

let d = new Dog('Mitzie');
d.speak(); // Mitzie makes a noise.