/* Given an array of n distinct integers, transform the array into a zig zag sequence 
by permuting the array elements. A sequence will be called a zig zag sequence if 
the first  k elements in the sequence are in increasing order and 
the last k elements are in decreasing order, where k = ( n+1)/2
You need to find the lexicographically smallest zig zag sequence of the given array.

Example :
a = [2, 3, 5, 1, 4]
Now if we pemute the array as [1, 4, 5, 3, 2], the result is a zig zag sequence.

Debug the given function findZigZagSequence to return the appropriate zig zag sequence for the given input array.

Note: You can modify at most three lines in the given code. You cannot add or remove lines of code.
To restore the original code, click on the icon to the right of the language selector.

Input Format
The first line contains t the number of test cases. The first line of each test case contains an integer n denoting the number of array elements. The next line of the test case contains n elements of array a 

constraints :
1 ≤ t ≤ 20
1 ≤ n ≤ 10000 (n is always odd)
1 ≤ ai ≤ 10⁹

*/

function processData(input) {
  //Enter your code here
  // Split the input by newlines and parse the integers
  const lines = input.trim().split("\n");
  let t = parseInt(lines[0]);
  let currentIndex = 1;

  while (t > 0) {
    const n = parseInt(lines[currentIndex]);
    const a = lines[currentIndex + 1].split(" ").map(Number);
    currentIndex += 2;

    // Sort the array in ascending order
    a.sort((x, y) => x - y);

    // Initialize left and right pointers
    let left = 0;
    let right = n - 1;

    // Construct the zig zag sequence
    const result = [];
    while (left < right) {
      result.push(a[left]);
      result.push(a[right]);
      left++;
      right--;
    }
    // If the array length is odd, add the middle element to the result
    if (left === right) {
      result.push(a[left]);
    }

    // Print the result array
    console.log(result.join(" "));

    t--;
  }
}

