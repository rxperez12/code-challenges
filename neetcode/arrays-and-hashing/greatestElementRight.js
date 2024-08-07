/**
 * Problem:https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let currMax = arr[arr.length - 1];

  for (let i = arr.length - 1; i >= 0; i--) {
    let currValue = arr[i];
    if (i === arr.length - 1) {
      arr[i] = -1;
    } else {
      arr[i] = currMax;
    }
    currMax = Math.max(currMax, currValue);
  }

  return arr;
};


/**
 * start from the right -> make that number -1 and save number at that position
 * as greatest number
 *
 * iterate from the back, get the maximum and replace current num
 * get maximum between prereplaced current number and max and set that as new max moving forward
 * when reach end, return array
 */

console.log(replaceElements([400]));
console.log(replaceElements([17, 18, 5, 4, 6, 1]));
