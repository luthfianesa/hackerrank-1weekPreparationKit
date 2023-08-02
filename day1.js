/* Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. 
The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.*/

function plusMinus(arr) {
  let positiveRatio = 0;
  let negativeRatio = 0;
  let zeroRatio = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveRatio += 1 / arr.length;
    } else if (arr[i] < 0) {
      negativeRatio += 1 / arr.length;
    } else {
      zeroRatio += 1 / arr.length;
    }
  }
  console.log(positiveRatio.toFixed(6));
  console.log(negativeRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));
}

// console.log(plusMinus([1,1,0,-1,-1]));
console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
// Expected : 0.500000 0.333333 0.166667 <- vertically
// console.log(plusMinus([1, 2, 3, -1, -2, -3, 0, 0]));
// Expected : 0.375000 0.375000 0.250000 -< vertically

/* End of 1st problem */

/* 2nd Problem */
/* End of 2nd Problem */
