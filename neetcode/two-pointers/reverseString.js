/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }

  return s;
};

/**
 * Set a pointer at 0 and at end of array
 *
 */

console.log(reverseString(["H", "a", "n", "n", "a", "h"]));