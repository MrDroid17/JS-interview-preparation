/**
 * The Promise() object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
 * 3-states of a promises   --> pending, fulfilled, rejected
    * Static methods --> 
        * Promise.all() - all promises to be resolved, or for any to be rejected.
        * Promise.allSettled()  - Wait until all promises have settled (each may resolve or reject)
        * Promise.race() - any of the promises is fulfilled or rejected.
        * Promise.any() - any of the promises is fulfilled.
        * Promise.resolve()
        * Promise.reject() 
        
    * Instance methods --> 
        * Promise.prototype.then()
        * Promise.prototype.catch()
        * Promise.prototype.finally()

    With promises----> , we can avoid nesting callbacks too deeply.
    can chain --Chainig of promises 
            IMPORTANT(Chainig) -- Once a promise rejected, the ones that come after it won’t run.
            We can get the error details and do something with it in the catch function’s callback like we have above.
 */