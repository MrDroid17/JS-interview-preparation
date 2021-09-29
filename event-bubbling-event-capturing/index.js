/**
 * @link https://www.youtube.com/watch?v=aVSf0b1jVKk&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks
 * 
 * event Trickling up and event capturing down
 *
 * addEvenHandler('click', ()=>{}, useCapture);
 * useCapture is a boolean
 * default is false, false represents event bubbling up or tricking up
 * default is true, true represents event capturing or trickling down
 */

/**
 * PARAM GYAN -- first capturing(or trickling) then bubbling(event delegation is based upon event bubbling)
 * 
    The event propagation mode determines in which order the elements receive the event. With bubbling, the event is first captured and 
    handled by the innermost element and then propagated to outer elements. With capturing, the event is first captured by the outermost element and propagated to the inner elements.

    user can control it.
 */



document.querySelector("#grandparent")
  .addEventListener('click', () => {
    console.log('grandparent clicked.');
  }, true);// capturing


document.querySelector("#parent")
  .addEventListener('click', (e) => {
    console.log('parent clicked.');
    e.stopPropagation();
  }, false); // bubbling


document.querySelector("#child")
  .addEventListener('click', () => {
    console.log('child clicked.');
  }, true);// bubbling
