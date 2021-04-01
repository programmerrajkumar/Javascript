//throw 'Error2';   // String type
//throw 42;         // Number type
// throw true;       // Boolean type

// Create an object type UserException
function UserException(message) {
    this.message = message;
    this.name = 'UserException';
  }
  
  // Make the exception convert to a pretty string when used as a string
  // (e.g., by the error console)
  UserException.prototype.toString = function() {
    return `${this.name}: "${this.message}"`;
  }
  
  // Create an instance of the object type and throw it
  //throw new UserException('Value too high');



function f() {
    try {
        console.log(0);
        throw 'bogus';
    } catch (e) {
        console.log(1);
        return true;    // this return statement is suspended
        // until finally block has completed
        console.log(2); // not reachable
    } finally {
        console.log(3);
        return false;   // overwrites the previous "return"
        console.log(4); // not reachable
    }
    // "return false" is executed now
    console.log(5);   // not reachable
}
console.log(f()); // 0, 1, 3, false

// Overwriting of return values by the finally block also applies 
//to exceptions thrown or re-thrown inside of the catch block:

function f1() {
    try {
        throw 'bogus';
    } catch (e) {
        console.log('caught inner "bogus"');
        throw e; // this throw statement is suspended until
        // finally block has completed
    } finally {
        return false; // overwrites the previous "throw"
    }
    // "return false" is executed now
}

try {
    console.log(f1());
} catch (e) {
    // this is never reached!
    // while f() executes, the `finally` block returns false,
    // which overwrites the `throw` inside the above `catch`
    console.log('caught outer "bogus"');
}

  // OUTPUT
  // caught inner "bogus"
  // false