/* Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.

Example
grid = ['abc', 'ade', 'efg']
The grid is illustrated below.

a b c
a d e
e f g

The rows are already in alphabetical order. The columns a a e, b d f and c e g are also in alphabetical order, so the answer would be YES. Only elements within the same row can be rearranged. They cannot be moved to a different row.

Function Description

Complete the gridChallenge function in the editor below.

gridChallenge has the following parameter(s):

string grid[n]: an array of strings
Returns

string: either YES or NO 

Input Format

The first line contains t, the number of testcases,
Each of the next t sets of lines are described as follows: 
- The first line contains n, the number of rows and columns in the grid
- The next n lines contains a string of length n

Constraints
1 ≤ t ≤ 100
1 ≤ n ≤ 100
Each string consists of lowercase letters in the range ascii[a-z]

Output Format

For each test case, on a separate line print YES if it is possible to rearrange the grid alphabetically ascending in both its rows and columns, or NO otherwise.
*/

function gridChallenge(grid) {
  // Write your code here
  // Sort each row in ascending alphabetical order
  for (let i = 0; i < grid.length; i++) {
    grid[i] = grid[i].split("").sort().join("");
  }

  // Check if columns are in ascending alphabetical order
  for (let col = 0; col < grid[0].length; col++) {
    for (let row = 1; row < grid.length; row++) {
      if (grid[row][col] < grid[row - 1][col]) {
        return "NO";
      }
    }
  }

  return "YES";
}

// Test Case
// Input Format
const t = 1;
const testCases = [
  {
    n: 5,
    grid: ["ebacd", "fghij", "olmkn", "trpqs", "xywuv"],
  },
];

// Output Format
for (let i = 0; i < t; i++) {
  const { n, grid } = testCases[i];
  const result = gridChallenge(grid);
  console.log(result);
}
