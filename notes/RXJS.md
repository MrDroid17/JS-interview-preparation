## RXJS

    RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.

### Observable
* Observables are lazy Push collections of multiple values.

> an Observable that pushes the values 1, 2, 3 immediately (synchronously) when subscribed, and the value 4 after one second has passed since the subscribe call, then completes

```js
import { Observable } from 'rxjs';
 
const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});
```

> To invoke the Observable and see these values, we need to subscribe to it:
```js
console.log('just before subscribe');
observable.subscribe({
  next(x) { console.log('got value ' + x); },
  error(err) { console.error('something wrong occurred: ' + err); },
  complete() { console.log('done'); }
});
console.log('just after subscribe');
```


### Observer
*   consumer of values delivered by an Observable.
*   Observers are simply a set of callbacks, one for each type of notification delivered by the Observable: next, error, and complete

```js
const observer = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
  
};
```
>Observers are just objects with three callbacks, one for each type of notification that an Observable may deliver.
>
> To use the Observer, provide it to the subscribe of an Observable:

```js
observable.subscribe(observer);
```

### Operator
*  RxJS is mostly useful for its operators
*  Operators are the essential pieces that allow complex asynchronous code to be easily composed in a declarative manner.
*  Operators are functions. There are two kinds of operators:
  1. Pipeable Operators -- A Pipeable Operator is a function that takes an Observable as its input and returns another Observable. (A Pipeable Operator is essentially a pure function) like filter(...) and mergeMap
   
  2. Creation Operators  -- which can be called as standalone functions to create a new Observable. map(), of()


### Subscription 
*   an object that represents a disposable resource, usually the execution of an Observable
> A Subscription essentially just has an unsubscribe() function to release resources or cancel Observable executions.

```js
import { interval } from 'rxjs';
const observable = interval(1000);
const subscription = observable.subscribe(x => console.log(x));
// Later:
// This cancels the ongoing Observable execution which
// was started by calling subscribe with an Observer.
subscription.unsubscribe();
```

### Subject
*   An RxJS Subject is a special type of Observable that allows values to be multicasted to many Observers
*   A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmitters: they maintain a registry of many listeners.

> Type - Subject, Async Subject, Behaviour Subject and Reply Subject

---
<br>

### Basic rxjs from maxmillian Youtube videos
[Click here for playlist](https://www.youtube.com/watch?v=Tux1nhBPl_w&list=PL55RiY5tL51pHpagYcrN9ubNLVXF8rGVi)

#### filter, map, throttleTime
```js
const button = document.querySelector('button');
fromEvent(button, 'click')
  .pipe(filter(data => data.clientX % 2 == 0 && data.clientY % 2 == 0))
  .pipe(map(data => data.clientX + ', ' + data.clientY))
  .pipe(throttleTime(1000))
  .subscribe(e => console.log(e));
```

#### Example 2 - create a observerable
```js
of(1, 2, 3).pipe(map(x => x + '!!!')).subscribe(e => console.log(e));
```

### Observable, Observer and Subscription

```js
const button = document.querySelector('button');
var observer = {
  next: function (value) {
    console.log(value);
  },
  error: function (error) {
    console.log(error);
  },
  complete: function () {
    console.log('Completed');
  }
}

/**
 * Store subscription in a variable and unscrine it
 * to prevent memory leak
 */
var subscription = Observable.create(obs => {
  // obs.next('A value');
  // obs.complete();
  // obs.next('A second value');
  button.onclick = function (event) {
    obs.next(event);
  }
}).subscribe(observer);

setTimeout(function () {
  subscription.unsubscribe()
}, 5000)
```

### 3 interval, throttle, map

```js
var obs = interval(1000);
var observer = {
  next: function (value) {
    console.log(value);
  }
}

obs
  .pipe(map(value => 'Number: ' + value))
  .pipe(throttleTime(1900))
  .subscribe(observer);
```

### renamed operator in rxjs 6
```
rename operators in rxjs major changes
do()-- > tap()
catch()-- > catchError()
switch()-- > switchAll()
finally()-- > finalize()
throw()-- > throwError()
```

### Subject

  Event Emitter - obs -- passive --  can not trigger emission of value. but in some cases you may not needed same value to emit. For these subjects can be used. subject has next method that is helpful.

```js
var subject = new Subject();

subject.subscribe({
  next: function (value) {
    console.log(value);
  },
  error: function (error) {
    console.log(error);
  },
  complete: function () {
    console.log('Completed');
  }
})

subject.subscribe({
  next: function (value) {
    console.log(value);
  }
})

subject.next('A new data piece.');
subject.complete();
subject.next('a new value')
```
### debounceTime(), distinctUntilChanged()

```js
var input = document.querySelector('#input1');
var observable = fromEvent(input, 'input');

observable
  .pipe(map(event => event?.target?.value)) // earlier pluck is being used for this but is deprecated now
  .pipe(debounceTime(300))
  .pipe(distinctUntilChanged())
  .subscribe({
    next: function (value) {
      console.log(value);
    }
  })
```

### scan and reduce
> reduce: A function that returns an Observable that emits a single value that is the result of accumulating the values emitted by the source Observable.
>
> scan: A function that returns an Observable of the accumulated values.

  Important: reduce result the final value but scan return all the accumulated value at each step

```js
var observable = of(1, 2, 3, 4, 5);
observable
  // .pipe(reduce((total, currentValue) => total + currentValue))
  .pipe(scan((total, currentValue) => total + currentValue))
  .subscribe({
    next: function (value) {
      console.log(value);
    }
  })

```

### mergeMap()
  only give result if both of the variable subscribed
```js
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let span = document.querySelector('span');

var obs1 = fromEvent(input1, 'input');
var obs2 = fromEvent(input2, 'input');

obs1.pipe(mergeMap(
  event1 => {
    return obs2.pipe(map(event2 => event1.target.value + ' ' + event2.target.value))
  })
).subscribe(
  combinedValue => span.textContent = combinedValue
)
```

### switchMap
  Use one observable is dependent on another

```js
let button = document.querySelector('button');

var obs1 = fromEvent(button, 'click');
var obs2 = interval(1000);

obs1
  .pipe(switchMap(event => obs2))
  .subscribe(value => console.log(value))
```

### Behaviour Subject 

    A variant of Subject that requires an initial value and emits its current value whenever it is subscribed to.

```js
var clickEmitted = new BehaviorSubject('Not clicked.');
var button = document.querySelector('button');
var div = document.querySelector('div');

button.addEventListener('click', () => clickEmitted.next('Clicked!'));

clickEmitted.subscribe(
  (value) => div.textContent = value
);
```



