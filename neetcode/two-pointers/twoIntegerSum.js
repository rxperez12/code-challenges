function twoSum(numbers, target) {
  let left = 0;
  let right = 1;

  while (left < numbers.length) {
    const numberToFind = target - numbers[left]; //10
    while (right < numbers.length) {
      const numberToCheck = numbers[right]; //-3
      if (numberToCheck === numberToFind) return [left + 1, right + 1];

      if (numberToCheck > numberToFind) {
        break;
      } else {
        right++;
      }
    }
    left++;
    right = left + 1;
  }
}

let numbers = [-5, -3, 0, 2, 4, 6, 8];
let target = 5;

console.log(twoSum(numbers, target))

/**
 * Starting with the first number of numbers, subtract target from that number.
 * With i being the index of current number, make next interator i + 1
 * Starting at i + 1 check if that number is equal to target - current number
 * If the number is less than continue
 * If the number is equal, return both i and j, adding one to each
 * If number is greater than, continue
 * If our current number is greater than target,
 */