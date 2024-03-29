'use-strict'
/**
 * @link https://www.youtube.com/watch?v=75W8UPQ5l7k&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks
 *
 * Call bind apply
 */
/**
 * basic use of call function - example 1
 */
// let captainAmerica = {
//     firstname: "Steve",
//     lastname: "Rogers",
//     printAlias: function(){
//         console.log(this.firstname + " " + this.lastname + " is the Captain America.");
//     }
// }

// captainAmerica.printAlias()

// let captainAmerica2 = {
//     firstname: "Sam",
//     lastname: "Wilson"
// }

// captainAmerica.printAlias.call(captainAmerica2);

/**
 * basic use of call function - example 2
 * by using call you can borrow function from another object - function borrowing
 */

 let captainAmerica = {
    firstname: 'Steve',
    lastname: "Rogers"
}

let printAlias = function(city1, city2){
    console.log(this.firstname + " " + this.lastname + " is the Captain America. He belongs to " + city1 +" and currently lives in "+ city2 + ".");
}

printAlias()
printAlias.call(captainAmerica, "Brooklyn", "New York"); //call
printAlias.apply(captainAmerica, ["Brooklyn", "New York"]); //apply

let captainAmerica2 = {
    firstname: 'Sam',
    lastname: "Wilson"
}

let printAliasOffirstAvenger = printAlias.bind(captainAmerica2, "Louisiana", "New York");
console.log(printAliasOffirstAvenger);
printAliasOffirstAvenger();

/**
 * polyfills for bind functions
 * polyfills are fallback options for those browser which doesn't support or have bind funtion  
 */

Function.prototype.myBind = function(...args){
    let obj = this;
    let params = args.slice(1);
    return function(...args2){
        obj.apply(args[0], [...params, ...args2])
    }
}

let printAliasOffirstAvenger2 = printAlias.myBind(captainAmerica2, "Louisiana");
printAliasOffirstAvenger2('New York');



/**
 * Async and defer are boolean attributes
 * 3 senarios - script tags, async attribute in a script tag, defer attribute in script tag
 * 2 major thing in broweser happen
 * first - html parsing
 * second - fetching data from api and excuting html line by line
 * 
 */

/**
 * event bubbling and event capturing(or trickling) and event delegation
 */


