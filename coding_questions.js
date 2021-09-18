/**
 * #1 
 * get count of all albhabet use in a string
 * 
 *
 */
function getOcc(str) {
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
console.log(getOcc('Go with the flow'));


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