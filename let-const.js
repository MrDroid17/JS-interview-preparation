/**
 * Let and Const are also being hoisted but they are hoisted differently
 * but they are not hoisted in global scope instead it is in Temporal dead zone.
 * and it can only be accessed once variable is intialized.
 * Keep your let and const on top  -- use it there
 *
 */

console.log(a);
console.log(b);
console.log(c);
var a = 10;
let b = 11;
const c = 12;