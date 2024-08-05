/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {

  for (let i = 0; i <= nums.length; i++) {
    const numsGreater = nums.filter(num => num >= i);

    if (numsGreater.length === i) {
      return i;
    }
  }
  return -1;
};

/**
Starting from 0, go up one number at a time
Upper bound is the length of array
For each number check if number greater or equal to number are in array
if yes return number
If iterate through all numbers and no return, return -1
 */


console.log(specialArray([0, 4, 3, 0, 4]));