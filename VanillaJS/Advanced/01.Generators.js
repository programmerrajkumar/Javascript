/**
 *Generators are special type of function used to return multiple value on demand
 *uses yield keyword
 */
/**
 * returns Genertor Object, not value
 */
function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

var sequence = generateSequence();
sequence.next(); //{value: 1, done: false}
sequence.next();
sequence.next(); //{value: 3, done: true}

//next().value
// value from return statement will be mrked as done:true.
// this will be skipped in for loop
for (let value of sequence) {
    alert(value);
}
//1,2


let range = {
    from: 1,
    to: 5,

    *[Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*()
        for (let value = this.from; value <= this.to; value++) {
            yield value;
        }
    }
};


//Generator Composition

function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

    // 0..9
    yield* generateSequence(48, 57);

    // A..Z
    yield* generateSequence(65, 90);

    // a..z
    // yield* generateSequence(97, 122);
    for (let i = 97; i <= 122; i++) yield i;
}

let str = '';

for (let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
}

alert(str); // 0..9A..Za..z


//yield supports two-way communication
//gives the values when Generator().Next() is invoked
//gets the values when Generator().Next(args) is invoked with parameter


function* gen() {
    let ask1 = yield "2 + 2 = ?";

    alert(ask1); // 4

    let ask2 = yield "3 * 3 = ?"

    alert(ask2); // 9
}

let generator = gen();

alert(generator.next().value); // "2 + 2 = ?"

alert(generator.next(4).value); // "3 * 3 = ?"

alert(generator.next(9).done); // true