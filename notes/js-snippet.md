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

#### #16  how to check if two object is equal

```js
const one = {
  fruit: 'kiwi',
  nutrients: {
    energy: '255kJ',
    minerals: {
      name: 'calcium',
    },
  }
};

const two = {
  fruit: 'kiwi',
  nutrients: {
    energy: '255kJ',
    minerals: {
      name: 'calcium',
    },
  },
};
```
<details>
  <summary>Show Answer</summary>

>
> JSON.stringify(one) ==JSON.stringify(two);
>> for equality check order o key is also important

</details>

---
<br>

#### #17  
```js
var a =10;
var b = 20;
[a, b] = [b,a]
console.log(a, b);
```
<details>
  <summary>Show Answer</summary>

>
> 20, 10      
>> destructuring

</details>


#### #18
```js
console.log(bar());
var bar = function(){
    return 'ABC';
}
console.log(bar())
```
<details>
  <summary>Show Answer</summary>

>
> TypeError: bar is not a function 

</details>

---
<br>

#### #19
```js
console.log(bar);
var bar = function(){
    return 'ABC';
}
console.log(bar())
```
<details>
  <summary>Show Answer</summary>

>
> Undefined
>
> ABC

</details>

---
<br>

#### #19  -- how to prevent modification of object in JS ?

<details>
  <summary>Show Answer</summary>

Three level of preventing modifications
>
> Prevent extensions - No new properties or methods can be added to the object, but one can change the existing properties and method
>
> Seal - It is same as prevent extension, in addition to this also prevent existing properties and methods from being deleted.
> 
> Freeze - this prevent existing properties methods from being modified (All
properties and methods are read only).

</details>

---
<br>

#### #19  -- custom Logging with a prefix

```js
function appLog() {
  var args = Array.prototype.slice.call(arguments);
  args.unshift('your app name', 'test');
  console.log.apply(console, args);
}
appLog("Some error message");

```

<details>
  <summary>Show Answer</summary>

unshift: The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

> output: your app name test Some error message

</details>

---
<br>

#### #20 
```js
const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5));
console.log(array1);
```

<details>
  <summary>Show Answer</summary>

unshift: The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

> Array [4, 5, 1, 2, 3]

</details>

---
<br>

#### #21
```js
let c = [1,2,[3,[4,5]]]
let d = [...c]
console.log(d[0]);
console.log(d[2]);
console.log(d[2][1]);
```

<details>
  <summary>Show Answer</summary>

> 1
>
> Array [3, Array [4, 5]]
>
> Array [4, 5]

    Important: The spread operator makes deep copies of data if the data is not nested. When you have nested data in an array or object the spread operator will create a deep copy of the top most data and a shallow copy of the nested data.

> [Read more about Spread operator(...)](https://medium.com/@kevinlai76/the-spread-operator-deep-and-shallow-copies-d193ac9b58bf)
</details>

---
<br>

#### #22   Merge 2 JS Object

<details>
  <summary>Show Answer</summary>

> Using ES6, Object.assign method
```js
const merge = (toObj, fromObj) => Object.assign(toObj, fromObj);
```
</details>

> Without using built-in function
```js
function merge(toObj, fromObj) {
  if (typeof toObj === 'object' && typeof fromObj === 'object') {
    for (var pro in fromObj) {
      if (fromObj.hasOwnProperty(pro)) {
        toObj[pro] = fromObj[pro];
      }
    }
  } else {
    throw "Merge function can apply only on object";
  }
}
```
</details>

---
<br>

#### #23
```js
var strA = "hi there";
var strB = strA;
strB="bye there!";
console.log (strA)
```

<details>
  <summary>Show Answer</summary>

>
> hi there

</details>

---
<br>

#### #24
```js
var objA = {prop1: 42};
var objB = objA;
objB.prop1 = 90;
console.log(objA)
```

<details>
  <summary>Show Answer</summary>

>
> {prop1: 90}
>
> Objects are passed by reference,

</details>

#### #25
```js
var objA = {prop1: 42};
var objB = objA;
objB = {};
console.log(objA)
```

<details>
  <summary>Show Answer</summary>

>
> {prop1: 90}
>
> When we assign objA to objB , the objB variable will point to the same object as the objB variable. However, when we reassign objB to an empty object, we simply change where objB variable references to. This doesn't affect where objA variable references to.

</details>

---
<br>

#### #26
```js
var arrA = [0,1,2,3,4,5];
var arrB = arrA;
arrB[0]=42;
console.log(arrA);
```

<details>
  <summary>Show Answer</summary>

>
> [42,1,2,3,4,5]
</details>

---
<br>

#### #27
```js
var arrA = [0,1,2,3,4,5];
var arrB = arrA.slice();
arrB[0]=42;
console.log(arrA);
```

<details>
  <summary>Show Answer</summary>

>
> [0,1,2,3,4,5]
>
> slice function copies all the elements of the array returning the new array. That's why arrA and arrB reference two completely different arrays.
</details>

---
<br>

#### #28
```js
var arrA = [{prop1: "value of array A!!"}, {someProp: "also value of array A!"}, 3,4,5];
var arrB = arrA;
arrB[0].prop1=42;
console.log(arrA);
```

<details>
  <summary>Show Answer</summary>

>
> [{prop1: 42}, {someProp: "also value of array A!"}, 3,4,5]
>
</details>

---
<br>

#### #29
```js
var arrA = [{prop1: "value of array A!!"}, {someProp: "also value of array A!"}, 3,4,5];
var arrB = arrA.slice();
arrB[0].prop1=42;
arrB[3] = 20;
console.log(arrA);
```

<details>
  <summary>Show Answer</summary>

>
> [{prop1: 42}, {someProp: "also value of array A!"}, 3,4,5]
>
</details>

---
<br>

#### #30
```js
var employeeId = '1234abe';
(function(){
  console.log(employeeId);
  var employeeId = '122345';
})();
```

<details>
  <summary>Show Answer</summary>

>
> undefined
>
</details>

---
<br>

#### #31
```js
var employeeId = '1234abe';
(function() {
  console.log(employeeId);
  var employeeId = '122345';
  (function() {
    var employeeId = 'abc1234';
  }());
}());
```

<details>
  <summary>Show Answer</summary>

>
> undefined
>
</details>

---
<br>

#### #32
```js
(function() {
  console.log(typeof displayFunc);
  var displayFunc = function(){
  console.log("Hi I am inside displayFunc");
}
}());
```

<details>
  <summary>Show Answer</summary>

>
> undefined
>
</details>

---
<br>

#### #33
```js
var employeeId = 'abc123';
function foo(){
  employeeId = '123bcd';
  return;
}
foo();
console.log(employeeId);
```

<details>
  <summary>Show Answer</summary>

>
> '123bcd'
>
</details>

---
<br>

#### #34
```js
var employeeId = 'abc123';
function foo() {
  employeeId = '123bcd';
  return;
  function employeeId() {}
}
foo();
console.log(employeeId);
```

<details>
  <summary>Show Answer</summary>

>
> '123bcd'
>
</details>

---
<br>

#### #35
```js
var employeeId = 'abc123';
function foo() {
  employeeId();
  return;
  function employeeId() {
    console.log(typeof employeeId);
  }
}
foo();
```

<details>
  <summary>Show Answer</summary>

>
> function
>
</details>

---
<br>

#### #36
```js
function foo() {
  employeeId();
  var product = 'Car';
  return;
  function employeeId() {
    console.log(product);
  }
}
foo();
```

<details>
  <summary>Show Answer</summary>

>
> undefined
>
</details>

---
<br>

#### #37
```js
(function foo() {
  bar();
  function bar() {
    abc();
    console.log(typeof abc);
  }
  function abc() {
    console.log(typeof bar);
  }
}());
```

<details>
  <summary>Show Answer</summary>

>
> function function
>
</details>

---
<br>

