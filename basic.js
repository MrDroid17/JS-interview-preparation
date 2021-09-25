
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




/**
 * # string substr() and substring() method difference
  * substr --> substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.
      string.substr(start, length);
      var s = "JavaScript";
      var st = s.substr(4, 6);
      alert(st);

    substring --> returns the part of the string between the start and end indexes, or to the end of the string.
    string.substring(start, end)
    var s = "JavaScript";
    var st = s.substring(4, 10);
    alert(st);

     #Moreover, substr() accepts a negative starting position as an offset from the end of the string. substring() does not.
 * 
 */

