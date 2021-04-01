
/**
 * extends keyword is used for inheritance
 * The extends keyword can be used to subclass custom classes as well as built-in objects.
 * multiple inheritance is not possible
 */


class ChildClass extends ParentClass { }

class ValidationError extends Error {

  constructor(message) {
    super(message);  // call parent class constructor

    // NOTE: In derived classes, `super()` must be called before you
    // can use `this`. Leaving this out will cause a ReferenceError.
    this.name = 'ValidationError';
    this.code = '42';
  }

  printCustomerMessage() {
    return `Validation failed :-( (details: ${this.message}, code: ${this.code})`;
  }

}

try {
  throw new ValidationError("Not a valid phone number");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(error.name); // Now this is ValidationError!
    console.log(error.printCustomerMessage());
  } else {
    console.log('Unknown error', error);
    throw error;
  }
}