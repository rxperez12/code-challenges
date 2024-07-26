/**
 * Function that is given an array
 *  - array of 5 elements that are all strings, and 2 chars long
 *  - each string represents a card i.e 2C  5D  3S  4S  6H - represents suit of card,
 *  - does this array form a straight in a poker hands
 *  - starts from 2 or ends with A
 *  - anything in that range
 *  - values of face cards J, Q, K, A
 *  - in a straight the suit is not relevant to the hand.
 *    - don't need to consider the second value
 *
 *
 * Test Cases -
 *
 * [2S, 3S, 4H, 5C, 6H] - True
 *
 * [JH, QD, AC, 10S, KH] - True
 *
 * [8D, 5C, 3H, 2D, 9D] - False
 *
 * Data Structure - Array
 *
 * create card array = [2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A]
 * for the cards, take of left most char
 * this leaves values to sort
 *
 * Array.sort -> within callback function return values depending on index of card value
 * in answer array.
 *
 * with sorted array, we can start from first value and check answer array,
 * If sorted array value and answer array value does not match up, return false
 * If you get to end, return true
 */

function isArrayStraight(arr){
  const cardValue = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

  const arrVals = arr.map(val => {val.slice(0, val.length - 1)})

  const sortedArr = []

  for(let i = 0; i < arrVals.length; i++){
    const compareVal = arrVals[i]
    const idxCompareVal = cardValue.indexOf(compareVal)
    for(let j = i + 1; j < arrVals.length; j ++){
      const nextValue = arrVals[j]
      const idxNextVal = cardValue.indexOf(nextValue)

      if(idxCompareVal < idxNextVal)
    }
  }

}
