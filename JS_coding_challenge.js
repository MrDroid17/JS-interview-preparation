/**
 * Javascript Coding Challenge
@link https://www.youtube.com/playlist?list=PLkBfv4fGBau-q9tGBUgVoGClRsSBiiZm8
 */
/**
 * #1  Write a function to reverse a string
 */

function reverseString(str){
    let reverse = str.split('').reverse().join('');
    return reverse;
}

// let output = reverseString('Sobhit kumar');


/**
 * #2  Factorialize
 */

function getFactorial(number){
    let result = 1;
    for(var i=1; i<=number; i++){
        result *= i;
    }
    return result;
}

// let output = getFactorial(6);

/**
 * #3  Palindrome
 */

 function isPalindrome(str){
    let reverse = str.split('').reverse().join('');
    return str === reverse ? true : false;
}

// let output = isPalindrome('racecars');


/**
 * #4  Logest word in a string
 */

 function getLongestWord(str){
    // first way
  let words = str.split(' ');
  let longest_word = '';
  for(let word of words){
      if(word.length > longest_word.length) longest_word = word;
  }
  return longest_word;

  // second way
//   return str.split(' ').sort((a,b)=> b.length-a.length)[0];
}
// let output = getLongestWord('The quick brown fox jumped over the lazy dog');


/**
 * #5  Titlecase - capitalize each word
 */

 function makeTitleCase(str){
  let words = str.toLowerCase().split(' ');
    for(var i=0; i< words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  return words.join(' ');

  // second way
//   return str.toLowerCase().split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ');
}

// let output = makeTitleCase('The quick brown fox jumped over the lazy dog');



/**
 * #6  Largest number in Arrays
 */

function getLargestNameInArrays(_num_arrays){

}

// let output = getLargestNameInArrays();



/**
 * #7  Confirm Ends
 */

function confirmEnding(str, target){
    return str.substr(-target.length) === target ? true : false;

    // second method
     return str.endsWith(target);
}

// let output = confirmEnding('kumar', 'r');

/**
 * #8  Repeat string num times
 */
 function repeatStringNumTimes(str, target){
    return str.substr(-target.length) === target ? true : false;

    // second method
     return str.endsWith(target);
}

// let output = repeatStringNumTimes('kumar', 'r');


/***
 *#16  Caesers Ciphers
    need ASCII character code
    uppercase A 65  -- uppercase Z 90   -- N -midpoint
    lowercase a 97 -- lowercase z 122  -- n -110
    charCodeAt() -- will give ascii code
    fromCharCode()
 * 
 */
function caesarsCipher(str){
    var solved = "";
    for(let i=0; i < str.length; i++){
        var asciiNum= str[i].charCodeAt();
        if(asciiNum >= 65 && asciiNum <=90){
            solved += String.fromCharCode(asciiNum + 13);
        }
    }
    return solved;
}

let output = caesarsCipher('A')
console.log(output);

