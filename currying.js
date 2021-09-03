/**
 * Currying
 * Can be achieved by closures and bind method
 * currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each takes a single argument.
 * 
 * advatage --> when you need to call the same functions with some of the same parameters a lot. In these situations, currying becomes a good technique to use as it will make your code easier to refactor. Currying also creates a more declarative code base, e.g. it's easier to read the code and understand what it's doing (Assuming good naming conventions are being enforced!).
 * 
 */
// with bind
// let multiply = function(x, y) {
//     console.log(x * y);
// }

// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(3);


// let multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(5);


//function closure`

let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(3);

let multiplyByThree = multiply(3);
multiplyByThree(5);

