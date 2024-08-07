/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let currMax = 0;

  for (let i = 1; i < s.length; i++) {
    const left = s.slice(0, i).split('').filter(num => num === "0");
    const right = s.slice(i).split('').filter(num => num === "1");

    const score = left.length + right.length;

    if (score > currMax) currMax = score;
  }

  return currMax;
};

/**
 Start from i = 1
 split left and right strings
 count left and right and get score
 if score is greater than maximum, replace
 return max score


 */

console.log(maxScore("1111"));