###  JS Snippet

<br>

#### #1
```js
function display() {
  var a = b = 10;
}
display();
console.log('b', typeof b === 'undefined');
console.log('a', typeof a === 'undefined');
```
<details>
  <summary>Show Answer</summary>

> true 
> 
> false
</details>

---
<br>

#### #2 Write below example using Closer
```js
function mul(x, y, z){
  return x * y * z;
}
```
<details>
  <summary>Show Answer</summary>

```js
function mul(x){
  return function (y){
    return function(z){
      return x*y*z;
    }
  }
}
mul(3)(4)(6); // currying
```
</details>

---
<br>

#### #3 
```js
console.log("1");
setTimeout(() => {
  console.log("2")
},0);
setImmediate(() => {
  console.log("3");
});
```
<details>
  <summary>Show Answer</summary>

> 1
> 
> 3
> 
> 2
> > The **setImmediate** function is used to execute a function right after the current event loop finishes. In simple terms, the function functionToExecute is called after all the statements in the script are executed.
</details>

---
<br>

#### #4 setImmediate
```js
function myFunction(platform){
    console.log("Hi, Welcome to " + platform);
}

console.log("Before the setImmediate call");
let timerID = setImmediate(myFunction, "Educative");
console.log("After the setImmediate call");

for(let i=0; i<4; i++){
    console.log("Iteration of loop: "+i);
}
```
<details>
  <summary>Show Answer</summary>

> Before the setImmediate call
> 
> After the setImmediate call
>
> Iteration of loop: 0
>
>Iteration of loop: 1
>
>Iteration of loop: 2
>
>Iteration of loop: 3
>
> Hi, Welcome to Educative
> > setImmediate() is to schedule the immediate execution of callback after I/O events callbacks and before setTimeout and setInterval .
</details>

---
<br>

#### #5 setImmediate 
```js
function myFunction(platform){
    console.log("Hi, Welcome to " + platform);
}

console.log("Before the setImmediate call");
let timerID = setImmediate(myFunction, "Educative");
console.log("After the setImmediate call");

for(let i=0; i<4; i++){
    console.log("Iteration of loop: "+i);
}
```
<details>
  <summary>Show Answer</summary>

> Before the setImmediate call
> 
> After the setImmediate call
>
> Iteration of loop: 0
>
> Iteration of loop: 1
>
> Iteration of loop: 2
>
> Iteration of loop: 3
>
> Hi, Welcome to Educative
> setImmediate() is to schedule the immediate execution of callback after I/O events callbacks and before setTimeout and setInterval .
</details>

---
<br>

#### #6 
```js
function welcome(name, message) {
  console.log(message + " "+ name);
}
welcome("Thor", "Hi");
  function welcome() {
  console.log("empty");
}

welcome();
welcome("Thor", "Hi");
```
<details>
  <summary>Show Answer</summary>

> empty
> 
> empty
>
> empty
</details>

---
<br>

#### #7
```js
var a = 10;
let b = function (){
  console.log(a);
  var a = 20;
}
b();
```
<details>
  <summary>Show Answer</summary>

> undefined

</details>

---
<br>



