/**
 * @link https://www.youtube.com/watch?v=3KJI1WZGDrg&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks
 * 
 * event event Delegation  only possible because of bubbling back
 * behaviour pattern can also be achieved by event Delegation
 *pros:
  1. memory efficient - also mitigate the risk of performance bottleneck
  2. less code
  3. DOM manupulation 

 *limitations
  1. some event doesn't bubble up(like blur, focus, resizing of window, hiding of scroll are not bubble up)
  2. if you want to use event delegation make sure you are not using stopPropogation()
 *
 */




/**
 * Example 1
 */
document.querySelector("#category")
  .addEventListener('click', (e) => {
    console.log('category clicked.', e);
    if (e.target.tagName === 'LI') {
      window.location.href = '/' + e.target.id;
    }
  });

/**
 * Example 2
 * Behavour pattern can be created by event delegation
 * behaviour pattern
 */
document.querySelector("#form")
  .addEventListener('keyup', (e) => {
    console.log(e);
    if (e.target.dataset.uppercase !== undefined) {
      e.target.value = e.target.value.toUpperCase();
    }
  });
