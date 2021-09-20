/**
 * #1 
 * get count of all albhabet use in a string
 * exmaple:
 * input:
 * str =  'hello world'
 * 
 * output:
 *{"h": 1: "e":1, "l": 3, "o": 2, " ": 1, "w": 1, "r": 1, "d": 1}

 */
function getOccuranceCount(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    if (result.hasOwnProperty(str[i])) {
      result[str[i]] = result[str[i]] + 1;
    } else {
      result[str[i]] = 1;
    }
  }

  // your code
  return result
}
console.log(getOccuranceCount('Go with the flow'));


/**
 * #2
 * The input nums is supposed to be an array of unique integers ranging from 1 to nums.
 * length (inclusive). However, there is a mistake: one of the numbers in the array is 
 * duplicated, which means another number is missing. Find and return the *sum* of the
 * duplicated number and the missing number. Example: in the array [4, 3, 3, 1], 3 is 
 * present twice and 2 is missing, so 3 + 2 = 5 should be returned.
 * 
 */

function getSum(nums) {

  let a2 = nums.sort();
  let duplicate_no, missisg_no;

  a2.forEach((num, i) => {
    if (a2[i] !== (a2[i - 1] + 1)) {
      duplicate_no = a2[i];
      missisg_no = a2[i] - 1;
    }

  })

  console.log(duplicate_no + missisg_no);
  return duplicate_no + missisg_no;
}

getSum([4, 3, 2, 2, 6, 5, 7]);


/**
 * #3
 * 
 * Write a program that, given an array A[] of n numbers and another number x, determines whether or not there exist two elements in A[] whose sum is exactly x.

Examples:
Input: arr[] = [0, -1, 2, -3, 1]
        sum = -2
Output: -3, 1
         Valid pair exixts.

If we calculate the sum of the output,
1 + (-3) = -2

Input: arr[] = {1, -2, 1, 0, 5}
       sum = 0
Output:
        No valid pair exists.
 *
 */

function findVal(arr, x) {
  let final_output;

  for (let i = 0; i < arr.length - 1; i++) {
    if ((i < arr.length - 1) && ((arr[i] + arr[i + 1]) === x)) {
      final_output = arr[i] + ', ' + arr[i + 1];

    } else {
      final_output = 'No valid pair exists';
    }
  }

  return final_output;
}

console.log(findVal([0, -1, 2, -3, 1], -2));


/**
 * Find the largest pair sum in an unsorted array
 */

function getLargestPairSum(arr) {
  let first_number, second_number;

  if (arr[0] > arr[1]) {
    first_number = arr[0];
    second_number = arr[1];
  } else {
    first_number = arr[1];
    second_number = arr[0];
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > first_number) {
      second_number = first_number;
      first_number = arr[i];
    } else if (arr[i] > second_number && arr[i] != first_number) {
      second_number = arr[i]
    }
  }
  console.log(`Sum of ${first_number} and ${second_number} is ${first_number + second_number}`);
}
let arr_of_number = [8, 10, 11, 15, 14, 13, 12];
getLargestPairSum(arr_of_number);

/**
 * Write a function to to sum numbers until it has no parameter
 * sum(3)(4)(5)(3)(4)....()
 * 
 */

let sum = a => b => b ? sum(a + b) : a;

console.log(sum(10)(20)(3)(4)());
