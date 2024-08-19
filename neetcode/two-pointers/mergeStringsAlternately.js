/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let pointer = 0;
  let answer = '';

  while (pointer < word1.length && pointer < word2.length) {
    answer += word1[pointer];
    answer += word2[pointer];

    pointer++;
  }

  answer += word1.slice(pointer);
  answer += word2.slice(pointer);

  return answer;
};

/**
 * start at beginning of both strings
 *
 * while pointer is less than the length of string length, add letter at pointer
 * location to answer
 * add one to pointer
 * do this for letter pointer 1 and 2
 * when pointer reaches end of one word, add rest of word to answer
 * return answer
 *
 */

console.log(mergeAlternately('abcd', "pq"));