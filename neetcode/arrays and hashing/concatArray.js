/**
 * Problem: https://leetcode.com/problems/concatenation-of-array/
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  const concatArr = new Array(nums.length * 2);

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    concatArr[i] = num;
    concatArr[i + nums.length] = num;
  }
  return concatArr;
};

console.log(getConcatenation([1, 2, 1]));