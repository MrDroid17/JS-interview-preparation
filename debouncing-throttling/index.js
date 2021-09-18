// debouncing in javascript
/**
 * Debouncing and Throttling is used for both 
 * 
 * Performation optimisation
 * Rate limiting of function call
 * 
 */
let counter = 0;
const getData = (rat, cat) => {
    // calls an API and get Data
    console.log("Fetching data ...", rat , cat,  ++counter);
}

/**
 * make a bebouncing function
 */

const debounce = function(fn, delay, rat, cat){
    let timer;
    return function(){
        let context = this, args = [rat, cat];
        clearInterval(timer);
        timer = setTimeout(()=>{
            fn.apply(context, args)
        }, delay)
    }
}

const debouncing = debounce(getData, 300, 'jerry', 'tom');


/**
 * Throttling
 * 
 */

 const loggerFunc = () => {
    console.count("Throttled Function");
  }
  
  const throttle = (fn, limit) => {
    let flag = true;
    return function(){
      let context = this;
      let args = arguments;
      if(flag){
        fn.apply(context, args);
        flag = false;
        setTimeout(() => {
          flag=true;
        }, limit);
      }
    }
  }
  
  const betterLoggerFunction = throttle(loggerFunc, 1000);
  
  window.addEventListener("resize",betterLoggerFunction);
  
  // This is the normal Function without Throttling
  //Check the console for the difference between the calls of Normal Function and the Throttled Function 

//   const normalFunc = () => {
//     console.count("Normal Function");
//   }
  
//   window.addEventListener("resize",normalFunc);


/**
 * Debouncing and Throttling - difference
 *  example 1: searchBar for 300ms on keyup
 * debouncing   will execute if there is 300ms of delay after keyup
 * throttling will exceute every 300ms of delay after last api call
 * 
 * example 2: resizing of browser -- track how often user is resizing the browser windon
 * 
 * example 3: Button click -- thottling is better to control event
 * 
 * example 4 : scrolling click
 * 
 */
  
  



