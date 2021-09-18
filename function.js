/**
 * Function
 * First class function
 * anonymous function
 * function statement
 * function expression
 * function declaration
 */

// function statement AKA function declaration
// major diff -- between function statement and functin expression - hoisting
a();
b();

function a(){
    console.log("a called");
}

// function expression  -- hoisted as a variable
var b = function() {
    console.log("b called");
}

/**
 * Anonymous function - function without a name
 * used in place where use as a value = like in function expression
 */

/**
 * Named Function Expression -- if you give name to an anonymous function in function expression
 * xyz is a local variable because it can be accessed inside xyz()
 */
 var c = function xyz() {
     console.log(xyz);
    console.log("c called");
}

xyz() // this will throw syntax error, can't access as xyz is local variable


/**
 * Argument and parameters
 */
 var d = function abc(param1, param2) { // parameter
    console.log(xyz);
   console.log("d called", param1 * param2);
}

abc(1, 2); //argument

/**
 * First class functions -- ability to use like value and use as argument to pass in another function and can be retured as another function 
 * also know as First class citizens 
 */
 var e = function (param1) { // parameter
    console.log(xyz);
   console.log("e called", param1 * param2);
}

e(function abc(){  }); //argument -- callback
e(a()); //argument -- callback

/**
 * Arrow function
 */

