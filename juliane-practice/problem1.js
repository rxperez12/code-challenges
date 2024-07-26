/**
 * Function that takes in a word and returns true or false if that word is a palindrome
 *
 * Input: word -> one word string
 * Output: Boolean => palindrome
 *
 * 'tacocat' => true // test if the work has odd amount of characters - tacocat
 * "nOon" => true // test for even characters - works
 * "cat" => false // test for false - works
 *
 * NO reverse
 *
 * Data structure: string
 *
 * change string to lowercase
 * create string for reverse
 * iterate through string from the end to beginning
 * append character at index i into reverse string
 *
 * compare reverse string and regular string
 * answer will be returned to user.
 */

function isPalidrome(word){
  if(word.length === 1) return true;

  let lowercaseWord = word.toLowerCase() //cat
  let reverseWord = ''

  for(let i = word.length -1; i >= 0; i--){// -1
    const letter = lowercaseWord[i] // c
    reverseWord += letter // tac
  }

  return reverseWord === lowercaseWord // false
}

/**
 *
 */