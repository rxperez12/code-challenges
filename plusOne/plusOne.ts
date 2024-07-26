function plusOne(digits: number[]): number[] {
  let answer: number[] = [];
  let remainder = 0;;
  let i = digits.length - 1
  while (i >= 0 || remainder !== 0) {
    let num = digits[i] || 0;
    num += remainder;
    remainder = 0;

    if (i === digits.length - 1) num++;

    if (num > 9) {
      num = num % 10;
      remainder = Number(String(num)[0]);
    }
    i--
    answer.shift(num);
  }
  return answer;
}


let arr1 = [1, 2, 3]
let ans1 = [1, 2, 4]

console.log(plusOne(arr1))
let arr2 = [9]
let ans2 = [1, 0]
console.log(plusOne(arr2))