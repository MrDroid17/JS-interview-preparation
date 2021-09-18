/**
 * Let and Const are also being hoisted but they are hoisted differently
 * but they are not hoisted in global scope instead it is in Temporal dead zone.(inside Scripts)
 * let does not is attached a
 * and it can only be accessed after variable is intialized.
 * Keep your let and const on top  -- use it there
 * if there is syntax error javascript upfront stop executing
 * error -- Syntax error, type error, reference error
 *
 */

console.log(a);
console.log(b);
console.log(c);
var a = 10;
let b = 11;
const c = 12;

/**
 * Block --> also called as compound statement
 * {---> a block
 * }
 * we group multiple statement in a group where javascript expects only one statement
 */
if(true)   console.log('single line');

if(true){
    // compound statement
    var x =0;
    console.log(a);

}
var d=50;
{
    var d=10;  // getting store in global scope
    let e=20; // block scope and in temporal zone;
    const f = 30;// block scope and in temporal zone;
}
console.log(d); // will have access
console.log(e); // will throw an error
console.log(f); // will throw an error


/**
 * Shadowed  of variable
 * in above example  d=10 will shadowed d=50;
 * shadoweding also work in function scope as well as block scope
 */

/**
 * Illegal showing
 */
// ist case -- will throw error
let a = 20;
{
    var a = 10;
}
// fine
let b = 20;
{
    let b = 10;
}
// fine
var c = 20;
{
    let c = 10;
}