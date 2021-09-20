/**
    A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.
    For example, a polyfill could be used to mimic the functionality of a text-shadow in IE7 using proprietary IE filters, or mimic rem units or media queries by using JavaScript to dynamically adjust the styling as appropriate, or whatever else you require.
 */
/**
 * Polyfills for all settled
 * @param {Array of promises
 * } promises 
 * @returns 
 */

Promise.allSettled = function (promises) {
  let mappedPromises = promises.map((p) => {
    return p
      .then((value) => {
        return {
          status: 'fulfilled',
          value,
        };
      })
      .catch((reason) => {
        return {
          status: 'rejected',
          reason,
        };
      });
  });
  return Promise.all(mappedPromises);
};


/**
 * polyfills for bind functions
 * polyfills are fallback options for those browser which doesn't support or have bind funtion  
 */

 Function.prototype.myBind = function(...args){
  let obj = this;
  let params = args.slice(1);
  return function(...args2){
      obj.apply(args[0], [...params, ...args2])
  }
}

/**
 * Polyfills for array methods
 * map
 * Array.map function takes a callback function as an argument and that callback function can have three arguments passed into it :
a. current value
b. index of the current value [optional]
c. array [optional]
 */

Array.prototype.myMap = function(callbackfn) {
  var arr = [];
  for(var i=0; i< this.length; i++){
    arr.push(callbackfn(this[i], i, this));
  }
  return arr;
}

let manipulated_arr = [1,2,3,4].myMap(e => e*3);
console.log(manipulated_arr);


/**
 * Filter
 * Array.filter function takes a callback function as an argument and that callback function can have three arguments passed into it :
a. current value
b. index of the current value [optional]
c. array [optional]
 */
Array.prototype.myFilter = function(callbackfn) {
  var arr = [];
  for (var i=0; i < this.length; i++){
    if(callbackfn.call(this, this[i], i, this)){
      arr.push(this[i])
    }
  }
  return arr;
}
let manipulated_arr2 = [1,2,3,4].myFilter(e => e%2==0);
console.log(manipulated_arr2);


/**
 * Reduce
 * Array.reduce function takes two arguement :
1. A callback function as an argument and that callback function can have four arguments passed into it :
a. accumulator
b. current value
c. index of the current value [optional]
d. array [optional]
2. An initial value.
 * 
 */

Array.prototype.myReduce = function(callbackfn, initialvalue){
  var accumulater = initialvalue;

  for(var i =0; i< this.length; i++){
    if(accumulater !== undefined){
      accumulater = callbackfn.call(undefined, accumulater, this[i], i, this);
    }else {
      accumulater = this[i];
    }
  }
  return accumulater;
}

let manipulated_arr3 = [1,2,3,4].myReduce((acc, curr) => {return acc += curr}, 0);
console.log(manipulated_arr3);



