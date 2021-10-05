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

#### #5
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

#### #6
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

#### #7 predict output
```js
for(var i = 1; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1);
}
```
<details>
  <summary>Show Answer</summary>

> 5
>
> 5
>
> 5
>
> 5

</details>

---
<br>

#### #8 
```js
var output = (function(x) {
  delete x;
  return x;
})(0);
console.log(output);
```
<details>
  <summary>Show Answer</summary>

> 0
>
>> Important- delete operator is used to delete a property from an object.

</details>

---
<br>

#### #9 
```js
var x = { foo : 1};
var output = (function() {
  delete x.foo;
  return x.foo;
})();
console.log(output);
```
<details>
  <summary>Show Answer</summary>

> undefined
>
>> Important- delete operator is used to delete a property from an object.

</details>

---
<br>

#### #10
```js
var Employee = {
  company: 'xyz'
}
var emp1 = Object.create(Employee);
delete emp1.company

console.log(emp1.company);
console.log(emp1.hasOwnProperty('company'));
```
<details>
  <summary>Show Answer</summary>

> xyz
>
>false
>
>> Important- emp1 object got company as prototype property. delete operator doesn't delete prototype property. emp1 object doesn't have company as its own property. you can test it
console.log(emp1.hasOwnProperty('company')) will output false .

</details>

---
<br>

#### #11

```js
var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
delete trees[3];
console.log(trees.length);
```
<details>
  <summary>Show Answer</summary>

> 5
> 
>> When we used delete operator for deleting an array element then, the array length is not affected by this.

</details>

---
<br>

#### #11

```js
var z = 1, y = z = typeof y;
console.log(y);
```
<details>
  <summary>Show Answer</summary>

> undefined

</details>

---
<br>

#### #12

```js
// NFE (Named Function Expression)
var foo = function bar() { return 12; };
typeof bar();
```
<details>
  <summary>Show Answer</summary>

> Reference error

</details>

---
<br>

#### #13

```js
bar();
(function abc(){console.log('something')})();
function bar(){console.log('bar got called')};
```
<details>
  <summary>Show Answer</summary>

> bar got called
>
> something

</details>

---
<br>

#### #14

What is constructor function? an Example.

<details>
  <summary>Show Answer</summary>

```js
function Employee(name, age) {
this.name = name;
this.age = age;
}
var emp1 = new Employee('John Doe', 28);
emp1.name; // "John Doe"
emp1.age; // 28
```

> Unlike function calls and method calls, a constructor call new Employee('John Doe', 28) creates a
brand new object and passes it as the value of this , and implicitly returns the new object as its
result.
>
> Important: primary role of the constructor function is to initialize the object.

</details>
---
<br>

#### #15

```js
function User(name) {
this.name = name || "JsGeeks";
}
var person = new User("xyz")["location"] = "USA";
console.log(person);
```
<details>
  <summary>Show Answer</summary>

>
> "USA"

</details>

---
<br>



