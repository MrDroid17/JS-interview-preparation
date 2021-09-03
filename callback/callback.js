/**
 * #1 Callback
 * a function passed into another passed as an argument. which is then invoked inside the outer function to complete some kind of routine or action.
 *
 */
// test this in browser as prompt is a browser function

// function greeting(name){
//     alert('Hello ' + name);
// }

// function processUserInput(callback){
//     var name = prompt("Please enter your name."); // prompt is supported in browser
//     callback(name);
// }

// processUserInput(greeting);


/** #2
 * function are first call citizens in JS , can be passed into another another function -- callback
 * JavaScript is a synchronous and single threaded
 * callback and promises can be used  avoid the blocking of main thread
 */ 

// setTimeout(function() {
//     console.log("timer")
// }, 5000);

// function x(y){
//     console.log("x");
//     y();
// }

// x(function y(){
//     console.log("y");
// });


/**
 * # 3 callback 
 * with event listeners
 */
// document.getElementById('clickMe').addEventListener('click', function xyz(){
//     console.log('button click');
// })

/**
 * # 4 callback 
 * with closure and event listeners
 * 
 * we should try to remove Event listener when not using them.
 * eventListener are heavy operations
 * if we remove all the event listeners it will clear all scopes and closeure which are are garbage collected
 */
function attachEventListener(){
    let count = 0;
    document.getElementById('clickMe').addEventListener('click', function xyz(){
        console.log('button click', ++count);
    })
}

attachEventListener();


