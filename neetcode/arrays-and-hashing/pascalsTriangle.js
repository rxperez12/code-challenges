/**
 * Problem: https://leetcode.com/problems/pascals-triangle/
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let triangle = [];

  for (let i = 1; i <= numRows; i++) {
    if (i === 1) {
      triangle.push([1]);
    } else {
      let lastRow = triangle[triangle.length - 1];
      let currRow = [1];
      for (let j = 0; j < lastRow.length; j++) {
        let newRowValues = lastRow[j] + (lastRow[j + 1] || 0);
        currRow.push(newRowValues);
      }
      triangle.push(currRow);
    }
  }
  return triangle;
};


/**
 * Given a number of rows for create answer array
 * Rule is that first and last numbers of array inside array should begin and end
 * with 1
 *
 */
console.log(generate(1));