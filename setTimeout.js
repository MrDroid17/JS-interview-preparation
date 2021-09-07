/**
 * #1 setTimeout trust issues
 * setTimeOut will only execute once callstack is empty  and afte 5000 millis
 * concurrency model in javascript
 * 
 */

// console.time('timer');
// console.log("Start");
// setTimeout(function cb(){
//     console.log("Callback");
// }, 5000);
// console.log("End");

// let startDate = new Date().getTime();
// let endDate = startDate;
// while(endDate < startDate + 10000){// run code for 10 seconds
//     endDate = new Date().getTime();
// }

// console.log("While expires.");
// console.timeEnd('timer');



/**
 * #2  with 0 timer
 */
// console.log("Start");
// setTimeout(function cb(){
//     console.log("Callback");
// }, 0)
// console.log("End");   




/**
 * #3 loop with setTimeout
 * issue with below example because of closure will remeber latest value
 */
function x(){
    for (var i=1; i<= 5; i++){
        setTimeout(function (){
            console.log(i)
        }, i*1000)
    }
    console.log("Namaste JavaScript");
}
x();



/**
 * #4 use let -- let has block scope but var is function scope
 *  loop with setTimeout
 * issue with below example because of closure will remeber latest value
 */
//  function x(){
//     for (let i=1; i<= 5; i++){
//         setTimeout(function (){
//             console.log(i)
//         }, i*1000)
//     }
//     console.log("Namaste JavaScript");
// }
// x();


/**
 * #5 use let -- use var but fixed the issue with closure
 *  loop with setTimeout
 * issue with below example because of closure will remeber latest value
 */
//  function x(){
//     for (var i=1; i<= 5; i++){
//         function close(x){
//             setTimeout(function (){
//                 console.log(x);
//             }, x*1000);
//         }
//         close(i);
//     }
//     console.log("Namaste JavaScript");
// }

// x();


