/**
 * Given two integer arrays, return an array of their intersection
 * Intersection should include numbers that repeat more than once.
 * Output order does not matter
 * Always at least one value in each array - no empty arrays
 * Only positive numbers
 *
 *
 * Example 1:
 * nums1 = [1, 2, 2, 1]
 * nums2 = [2, 2]
 *
 * output = [2, 2]
 *
 * Example 2:
 * nums1 = [4, 9 ,5]
 * nums2 = [9, 4, 9, 8, 4]
 *
 * output = [4, 9]
 *
 *[4, 9]
 *
 * [4, 5, 9]
 * [4, 4, 8, 9, 9]
 *
 * Sort both arrays from less than to greater than
 * Starting at the beginning of the shorter array
 * Compare that number with number from second array.
 * If numbers match, add to intersection array
 * If they don't match, move to next number in comparison array
 * If number in comparision array is greater than current number compared,
 * we know number doesn't exist, and can continue.
 * Move on to next number in first array.
 * We can end once our comparison array is all finished or first array is done
 * Once we hit end, reutrn intersection array to user.
 *
 */

function intersection(nums1, nums2) {
  const answer = []; //[4, 9]
  const sorted1 = nums1.sort((a, b) => a - b);
  const sorted2 = nums2.sort((a, b) => a - b);
  const shortestArr = (sorted1.length > sorted2.length) ? sorted2 : sorted1; // [4, 5, 9]
  const longestArr = (sorted1.length > sorted2.length) ? sorted1 : sorted2; // [4, 4, 8, 9, 9]
  let j = 0; //4
  let i = 0; //3

  while (i < shortestArr.length) {
    const num1 = shortestArr[i]; //9

    while (j < longestArr.length) {
      const num2 = longestArr[j]; //9

      if (num1 === num2) {
        answer.push(num1);
        j++;
        break;
      }
      if (num2 > num1) {
        break;
      }
      j++;
    }
    i++;

    if (j === longestArr.length) return answer;
  }
  return answer;
}

console.log(intersection([4, 9, 5], [4, 9]));