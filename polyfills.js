
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

