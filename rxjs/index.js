/***
 * Use RXJS.md from notes to try code here
 */


const Rx = rxjs;
let button = document.querySelector('button');
// button.addEventListener('click', (e) => {
//   console.log(e);
// });
console.log(Rx);
Rx.fromEvent(button, 'click')
  .subscribe((e) => {
    console.log('Clicked')
  })