/**
 * Problem: https://leetcode.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const shortestWordLength = Math.min(...strs.map(str => str.length));
  let i = 0;
  let longestPrefix = '';

  if (shortestWordLength === 0) return '';

  while (i < shortestWordLength) {
    let currentChar = strs[0][i]; //f

    for (const str of strs) {
      if (str[i] !== currentChar) return longestPrefix;
    }

    longestPrefix += currentChar;
    i++;
  }

  return longestPrefix;
};


/**
 * get the longest length of word of array
 * starting from 0 to n - 1 -> n being longest length, iterate through every word in
 * array checking the value at i
 * if single value doesn't match, return answer value
 * add one to n and do it for the next
 *
 * else if while loop continues to the end, the return answer
 */

console.log(longestCommonPrefix(["flower", "flow", "flight"]));