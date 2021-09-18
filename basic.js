
/** #1 exection global context
 * Execution environments - synchronous - single threaded
 * Variable environment -- Thread execution
 * execution context when we run js code
 * function invocation -- heart of js
 * 2-phase execution -- memory allocation - code execution it create execution context(global exection context exist)
 *call stack also know as following
 machine stack
program stack
control stack
runtime stack
machine stack
 */

/**
 * #1 Hoisting
 * 
 */
console.log(x);
getName();
var x = 7;
var getName = () => {
  console.log("Hello SK")
}

// JavaScript also create windows - is a global object get created with global execution context 
