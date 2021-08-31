/**
 * @link https://www.youtube.com/watch?v=v2tJ3nzXh8I
 * https://www.youtube.com/watch?v=WIP1czLm3CY
 * https://www.youtube.com/watch?v=yJDofSGTSPQ
 * https://www.youtube.com/watch?v=RcvQagxK_9w
 * 
 * #1
 * Nullish coalescing operator (??)
 *
 * a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
 * 
 * available in almost all latest browser
 */

let foo = null;
foo = foo ?? 'default string';
console.log(foo);


/** #2
 * Styling console log
 */
console.log(`%cI have %c$3500 %cin my account.`, "font-weight: normal; color: red", "font-weight: bold; color: green", "font-weight: bolder; color: red");

/** #3 
 * Optional chaining
 * Can also be applied on function of object
 * 
 */

let address = {
  state: " New Delhi",
  area1: undefined,
  area: {
    street: "2160/13, 3rd 60 feet road, ",
    pincode: 110044,
    locality: "Badarpur, "
  },
  getAddress: function () {
    return this.area.street + this.area.locality + this.area.pincode + this.state;
  }
}


// console.log(address.area1.street);  // this will  throw error ----> Uncaught TypeError: Cannot read property 'street' of undefined

console.log(address && address.area1 && address.area1.street); // will return  undefined

// same thing can be achieve by option chaining
console.log(address?.area1?.street);

// let say if you dont sure if a function is defined or not
console.log(address.getAddress());
// console.log(address.getAddress1()); // this will  throw error -->Uncaught TypeError: address.getAddress1 is not a function
console.log(address.getAddress1?.());// optional chaning


/** #4 Object shorthand
 *  if a object key and value variable is of same name Object shorthand can be use
 *
 */
let username = 'Sobhit Kumar', age = 29, profession = "Software Engg.";

let profile = {
  username,
  age,
  profession
}

console.log(profile);

/** #5 defer/async
 *
 */


