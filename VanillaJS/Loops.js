//labeled statement

outerLoop: for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break outerLoop;
  }
  innerLoop: for (let j = 0; j < 5; j++) {
    if (i % 2 === 0) {
      continue outerLoop;
    }
    if (j === 3) {
      break innerLoop;
    }
    console.log("j=" + j);
  }
  console.log("i=" + i);
}


let Obj = {
  a: 1,
  b: 2
}
//iterates over property names
//prop names are taken as keys
for (let prop in Obj) {
  console.log(`${prop}: ${Obj[prop]}`);
}

class Icon {
  constructor(w, h) {
    this.width = w;
    this.height = h;
  }
}

for (let prop in new Icon(128, 32)) {
  console.log(prop);
}

//indexes are taken as keys
let arr = ["A", "B", "C"]
for (let prop in arr) {
  console.log(prop);
}


let icon = new Icon(128, 32);

// --- Attach a property via prototype
Icon.prototype.myProp1 = 10;

// ---- Attaching a property but explicitly saying it is not enumerable 
Object.defineProperty(icon, "myProp2", {
  enumerable: false
})
// ---- This will not output "myProp2"
for (let prop in icon) {
  console.log(prop);
}

//iterates over property values:

for (let i of "String")
  console.log(i)


let m = new Map();
m.set("a", 1).set("b", 2);

for (let [i, j] of m)
  console.log(`${i}->${j}`);


for (let [i, j, k] of [[4, 5, 6], [1, 2, 3]])
  console.log(i, j, k);


const arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
  console.log(i); // logs 3, 5, 7
}