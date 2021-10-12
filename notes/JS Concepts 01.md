## This in JS

    Object that is executing current function;
    by default refer global object.
    inside a function this is always refers to a this.

    inside object refers to current object
    but arrow function always bind to global object  
    in forEach can also maintained
    [click here for videos](https://www.youtube.com/watch?v=Pi3QC_fVaD0)

## What is non-enumerable property in JavaScript and how you can create one?

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

## function binding

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





     