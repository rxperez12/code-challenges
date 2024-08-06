/**
 * Given a string reverse all the vowels in that string and return the new string
 *
 * Examples:
 * hello => holle
 * Elephant => alephEnt
 *
 *
 * Input: string
 * Output: string with reversed vowels
 *
 * Inferences:
 * strings should keep capital values
 * - both vowels and consonants
 * Empty string returns empty string
 *
 * data structure:
 * array
 *
 *
 * Code:
 *
 * check for empty string, if so, return empty string
 * define answer string as empty string
 * define vowels string as 'AEIOUaeiou'
 * Filter out vowels from string array
 * set rightmost value as vowel array length -1
 *
 * iterating thorough string, if character at current index is vowel,
 * get character at rightmost value from vowel array
 * subtract one from rightmost value
 *
 * append character to answer
 */

function reverseStringVowels(str) {
  if (str === '') return '';

  let answer = '';
  const vowels = 'AEIOUaeiou'; // could make this a set
  const vowelsInString = str.split('').filter(char => vowels.includes(char)); // [e, o]
  let vowelIndex = vowelsInString.length - 1; // -1

  for (let i = 0; i < str.length; i++) {  // n * m
    const currentChar = str[i]; // e

    if (vowels.includes(currentChar)) { // could do this in a set - checking this each time inside of loop
      answer += vowelsInString[vowelIndex];
      vowelIndex--;
    } else {
      answer += currentChar;
    }
  }

  return answer;
}

console.log(reverseStringVowels("Elephant"));