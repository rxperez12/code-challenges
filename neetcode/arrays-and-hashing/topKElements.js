function topKFrequent(nums, k) {
  const numsHash = new Map();

  for (const num of nums) {
    let value = numsHash.get(num) || 0;
    value++;
    numsHash.set(num, value);
  }

  const entries = [...numsHash.entries()].sort((a, b) => {
    const valueA = a[1];
    const valueB = b[1];

    if (valueA < valueB) return 1;
    if (valueA > valueB) return -1;
    return 0;
  });

  return entries.slice(0, k).map(entry => entry[0]);
}

console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2))


/** Need to return the k number of most frequent items
 * So if k is 2, return 2 most frequent items in the list
 *
 * So need to count the number of times that each value appears in array
 * store that in a hash table where the key the number and the value is the count
 * once we go through entire array, we get entries of array
 * sort the array by the value
 * return the top k values
 *Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]

 */