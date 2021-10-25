##  #1 This in JS

    Object that is executing current function;
    by default refer global object.
    inside a function this is always refers to a this.

    inside object refers to current object
    but arrow function always bind to global object  
    in forEach can also maintained
    [click here for videos](https://www.youtube.com/watch?v=Pi3QC_fVaD0)

## #2 What is non-enumerable property in JavaScript and how you can create one?

Object can have properties that don't show up when you iterate through object using for...in loop
or using Object.keys() to get an array of property names. This properties is know as nonenumerable
properties.

> Object.defineProperty() - method for creating non-enumerable property -- only create read only property.
```js
var person = {
    name: 'John'
};
person.salary = '10000$';
person['country'] = 'USA';
Object.defineProperty(person, 'phoneNo',{
    value : '8888888888',
    enumerable: false
})
Object.keys(person); // ['name', 'salary', 'country']
```

## #3 function binding

Function binding falls in advance JavaScript category and this is very popular technique to use in
conjunction with event handler and callback function to preserve code execution context while
passing function as a parameter.

```js
var clickHandler = {
    message: 'click event handler',
    handleClick: function(event) {
        console.log(this.message);
        }
};
var btn = document.getElementById('myBtn');
// Add click event to btn
btn.addEventListener('click', clickHandler.handleClick);
```

## #4 Primitive and non-primitive data types

list of data types that JavaScript can have: (7 types)

    Primitive Data types:
        refers to single value   
        Number, String, Boolean, Undefined, Null and Symbol.

    Non-Primitive data type: 
        The ‘object’ is a non-primitive data type in JavaScript. Arrays and Functions in JavaScript belong to the ‘object’ data type.
        Object

[Click to read more](https://www.edureka.co/blog/data-types-in-javascript/)


#### Iterators and generators
Iterators and Generators bring the concept of iteration directly into the core language and provide a mechanism for customizing the behavior of for...of loops.

Iterator:
In JavaScript an iterator: an object which defines a sequence and potentially a return value upon its termination.
having a next() method that returns an object with two properties:
value and done




[Read in details](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)


     