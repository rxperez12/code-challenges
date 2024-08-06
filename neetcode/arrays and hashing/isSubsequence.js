/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let tIndex = 0;
  let sIndex = 0;

  while (sIndex < s.length) {
    let sChar = s[sIndex];
    let tChar = t[tIndex];
    while (sChar !== tChar && tIndex < t.length) {
      tIndex += 1;
      tChar = t[tIndex];
    }
    if (sChar !== tChar && tIndex === t.length) return false;
    sIndex++;
    tIndex++;
  }
  return true;
};

/**
 * Need to check if relative positions of s are unchanged in relation to t
 * basically need to see if you get same substring in t given all other letters
 * filtered out
 * iterate through the s input.
 */

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
