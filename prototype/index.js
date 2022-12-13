/**
 * Protype and prototypal inheritance
 * @link https://www.youtube.com/watch?v=wstwjQ1yqWQ&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks
 *
 * Prototype: when you create anything in JS.  it automatically attaches 
 * an object (__proto__) with some hidden properties and methods to your JS object.
 *
 */


let arr = ['Sobhit', 'Kumar'];
let object = {
  name: "Sobhit",
  city: "Patna",
  getIntro: function () {
    console.log(this.name + 'from' + this.city);
  }
}

