/**
 * #1
 */

(function (x, f = () => x) {
  var x;
  var y = x;
  x = 2;
  return [x, y, f()]
})();


/**
 * #2
 */
function foo(n1, n2) {
  let p = new Promise(function (resolve, reject) {
    if (n1 >= 0 && n2 >= 0) {
      resolve(n1 + n2)
    } else {
      reject('reject')
    }

  })
  return p;
}

Promise.race([foo(10, 20), foo(40, 50)]).then(function (returnvalue) {
  console.log(returnvalue)
}).catch(function (returnvalue) {
  console.log(returnvalue)
})

/**
 * #3
 */
let a = 'abc';
console.log(a.__proto__);