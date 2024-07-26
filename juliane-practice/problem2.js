/**
 * Write as function that returns length of array recursively
 *
 * Input: array
 * Output: number that is length of array
 *
 * Data Structure: Array
 *
 * Base case - remainder array has length of 0 return 0
 *
 * add 1 + arraylength(remainder array => array minus the first most element)
 * run recrusively
 *
 * [] = > 0
 * [1, 2, 2] = 3
 *
 */
function arrayLength(array){

  //base case
  if(array.length === 0) return 0;

  const remainderArray = array.slice(1)
  return 1 + arrayLength(remainderArray)
}