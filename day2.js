/* Given an array of integers, where all elements but one occur twice, find the unique element. 
Example
a = [1,2,3,4,3,2,1]
The unique element is 4 .*/

function lonelyinteger(a) {
  // Write your code here
  for (let i = 0; i < a.length; i++) {
    let count = 0
    for (let j = 0; j < a.length; j++) {
      if (a[i] === a[j]) {
        count++
      }
    }
    if (count === 1) {
      return a[i]
    }
  }
  // If there is no unique element return null
  return null
}

console.log(lonelyinteger([1, 2, 3, 10, 3, 2, 1]));
