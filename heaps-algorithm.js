/***
 * Heap's Algorithm -- proposed by B.R HEAP --  a computer scientist -- 1963
 * no of permutaions for 4 element 4*3*2*1  or 4!
 * This algorithm used to get all the permutations of a number of element;
 * time complexity -- O(n)
 * This Algorithm minimize movement
 * its generates each permutaions from the previous one by interchanging a single pair of element;
 */

 const getPermutations = arr => {

    const output = [];
  
    const swapInPlace = (arrToSwap, indexA, indexB) => {
      const temp = arrToSwap[indexA];
      arrToSwap[indexA] = arrToSwap[indexB];
      arrToSwap[indexB] = temp;
    };
  
    const generate = (n, heapArr) => {
      if (n === 1) {
        output.push(heapArr.slice());
        return;
      }
  
      generate(n - 1, heapArr);
  
      for (let i = 0; i < n - 1; i++) {
        if (n % 2 === 0) {
          swapInPlace(heapArr, i, n - 1);
        } else {
          swapInPlace(heapArr, 0, n - 1);
        }
  
        generate(n - 1, heapArr);
      }
    };
  
    generate(arr.length, arr.slice());
  
    return output;
  };

  console.log(getPermutations([1,2,3,4]))
