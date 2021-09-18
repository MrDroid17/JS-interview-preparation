/**
 * a function which takes another fn as an argument or return a function
 */
const radius = [3, 1, 2, 4];

const calculateArea = function(radius) {
    const output = [];
    for(let i=0; i< radius.length; i++){
         output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
};

console.log('calculateArea' ,calculateArea(radius));

const calculateCircumference = function (radius) {
    const output = [];
    for(let i=0; i< radius.length; i++){
        output.push(2*Math.PI * radius[i]);
    }
    return output;
}
console.log('calculateCircumference', calculateCircumference(radius));

const calculateDiameter = function (radius) {
    const output = [];
    for(let i=0; i< radius.length; i++){
        output.push(2 * radius[i]);
    }

    return output;
}
console.log('calculateDiameter', calculateDiameter(radius));


/**
 * Better way
 */
const area = radius  =>  Math.PI * radius * radius;
const circumference = radius  => 2 * Math.PI * radius;
const diameter =  radius=> 2 * radius;

const calculate = function (radius, logic){
    const output = [];
    for(let i=0; i< radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

/**
 * Can Also be achieved through map AKA polyfills for map
 */
Array.prototype.myCaclulateMap = logic =>{
    const output = [];
    for(let i=0; i< this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}
console.log(radius.map(area));

