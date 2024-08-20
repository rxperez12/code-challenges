function isPalindrome(s) {
  let alphaNums = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let validChars = s.toLowerCase().split('').filter(char => alphaNums.includes(char));
  let left = 0;
  let right = validChars.length - 1;

  while (left < right) {
    if (validChars[left] !== validChars[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

let s = "Was it a car or a cat I saw?";

console.log(isPalindrome(s));