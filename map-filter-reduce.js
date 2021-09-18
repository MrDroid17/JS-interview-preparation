/**
 * 
 * Map
 * mapping all element of an array
 */

let arr1 = [9, 10, 11, 12, 14, 16, 18];

const double = arr1.map(x => x * 2);
/**
 * toString function take a parameter called radix
 * Specifies a radix for converting numeric values to strings. This value is only used for numbers
 */
const binary = arr1.map(x => x.toString(2));

console.log(double);
console.log(binary);

/**
 * Example 2
 * get Output -- [ 'akshay saini', 'donald trump', 'elon musk', 'deepika padukone' ]
 */
let users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 23 },
    { firstName: "elon", lastName: "musk", age: 26 },
    { firstName: "deepika", lastName: "padukone", age: 33 }
];

const getFullName = users.map(user => user.firstName + " " + user.lastName);
console.log(getFullName);


/**
 * FILTER
 */
let arr2 = [9, 10, 11, 13, 14, 15, 18];
const even_num_arr = arr2.filter(x => x % 2 === 0);
console.log(even_num_arr);

/**
 * getFirstName of all having age less than 30
 * output - ["akshay", "donald", "elon"]
 */

const getFirstName =  users.filter(x => x.age < 30).map((x) => x.firstName);
console.log("getFirstName", getFirstName);
// using reduce
const getFirstNameusingReduce =  users.reduce((acc, curr)=>{
    if(curr.age < 30){
        acc.push(curr.firstName)
    }
    return acc;
}, []);
console.log("getFirstNameusingReduce", getFirstNameusingReduce);;


/**
 * REDUCE
 */
const arr = [5, 1, 3, 2, 6];
// sum or max
// using for loop find sum
function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum;
}
console.log('FindSum', findSum(arr));
// 
const findSum2 = arr.reduce((acc, curr) => acc + curr, 0); // 0 initial value
console.log('FindSum2', findSum2);


// finding max
function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}
console.log('FindMax', findMax(arr));

const findMax2 = arr.reduce(function (max, curr) {
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0)
console.log('findMax2', findMax2);

/**
 * user count by age
 * acc = {26: 1, 75: 1, 50: 1}
 */

const getUserCount = users.reduce((acc, curr)=>{
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {})
console.log('getUserCount', getUserCount);


/**
 * polyfills for map, filter and reduce
 */
