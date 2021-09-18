/**
 * #1
 * Closure example
 * 
 * use of Closure
 * Module design pattern
 * currying
 * function like once
 * memoize
 * maintaining state in async world
 * setTimeout()
 * Iterators etc.
 */
function x() {
  var a = 2;
  function y() {
    console.log(a);
  }
  y();
}
x();

/**
 * #2
 * Closure example
 */
function x() {
  var a = 2;
  function y() {
    console.log(a);
  }
  return y;
}
var z = x();
console.log(z);

/**
 * #3
 * Closure example
 */
function x() {
  var a = 2;
  function y() {
    console.log(a);
  }
  a = 100;
  return y;
}
var z = x();
console.log(z);  // in z function along with function it also store the reference of a which is 100;
z(); // this will output in 100 //  b wont be garbage collected

/***
 * GARBAGE COLLECTION
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management
 *
    JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore (garbage collection).
    This automaticity is a potential source of confusion: it can give developers the false impression that they don't need to worry about memory management.

    Memory life cycle:
    Regardless of the programming language, the memory life cycle is pretty much always the same:

        * Allocate the memory you need
        * Use the allocated memory (read, write)
        * Release the allocated memory when it is not needed anymore
        *
    Release when the memory is not needed anymore

    MEMORY MANAGEMENT:
      The majority of memory management issues occur at this phase. The most difficult aspect of this stage is determining when the allocated memory is no longer needed.

      Low-level languages require the developer to manually determine at which point in the program the allocated memory is no longer needed and to release it.

      Some high-level languages, such as JavaScript, utilize a form of automatic memory management known as garbage collection (GC). The purpose of a garbage collector is to monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it. This automatic process is an approximation since the general problem of determining whether or not a specific piece of memory is still needed is undecidable.

 */