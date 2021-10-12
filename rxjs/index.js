const { range, of, fromEvent, Observable, interval, Subject, BehaviorSubject } = rxjs;
const { map, filter, throttleTime, debounceTime, distinctUntilChanged, reduce, scan, mergeMap, switchMap } = rxjs.operators;


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

/**
 * connect two observable
 */

let button = document.querySelector('button');

var obs1 = fromEvent(button, 'click');
var obs2 = interval(1000);

obs1
  .pipe(switchMap(event => obs2))
  .subscribe(value => console.log(value))


var clickEmitted = new BehaviorSubject('Not clicked.');
var button = document.querySelector('button');
var div = document.querySelector('div');

button.addEventListener('click', () => clickEmitted.next('Clicked!'));

clickEmitted.subscribe(
  (value) => div.textContent = value
);

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