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

