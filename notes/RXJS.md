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

