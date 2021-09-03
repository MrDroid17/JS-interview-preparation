/**
 * EVENT LOOP
 *  Event loop, callback queue and  microtask queue and how it is used in broweser
 * JS is syncroonous , single threaded language
 * it has one call stack and it can do only one thing at a time
 * this call stack is present inside JS engine
 * call stack doesn't have timer. whatever comes inside callstack will be exceuted instantly.
 * there is global execution context in JS
 */

/**
 * Web apis
 * setTimeout(), DOM APIs, fetch(), local Storage, console, Location(address)
 * Window.setTimeOut() or setTimeout() -- same 
 */

/**
 * Mictrotask queue()  -- now the question is what can come inside microtask Queue
 * 1. Promises - all the callback that comes through promises will go inside microtask queue
 * 2. Mutation Observer - keeps on checking wheter if there is some mutation in DOM tree or not
 *
 */

/**
 * # Starvation  of the task inside callback queue
 * if task in microsoft queue call itsef again and again in  -- callback queue will never get change to execute.
 * 
 */

/**
 * #1 
 */

console.log('Start');
setTimeout(function cb() {
    console.log("Callback");
}, 5000);
console.log("End");


/**
 * #2
 */
console.log('Start');
document.getElementById("btn").addEventListener("click", function cb(){
    console.log("Callback");
});
console.log("End");


/**
 * #3
 */
 console.log('Start');
 setTimeout(function cbT() {
    console.log("Callback");
}, 5000);

fetch("http://api.netflix.com").then(function cbF(){
    console.log("CB Netfix");
})
 console.log("End");