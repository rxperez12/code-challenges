/**
 * Problem: Write a function that takes in integer
 * convert integer into roman numerals
 * i = 1
 * 4
 * v = 5
 * 9
 * x = 10
 * 40
 * l = 50
 * 90
 * c = 100
 * 400
 * d = 500
 * 900
 * m = 1000
 *
 *
 *
 * rules:
 * i comes before v 4
 * i before x 9
 * x before l 40
 * x before c 90
 * c before d 400 etc etc.
 *
 * Number will not be larger than 4000
 * return all capital letters
 *
 * 8 => VIII
 * 4 => IV
 * 9 => IX
 * 22 => XXII
 * 49 => XLIX
 *
 *
 * make map where numbers are equal to corresponding letters
 * starting from largest digit, first we start with the thousand
 * check how many times 1000 goes into number
 * use map to find corresponding letter.
 * Multiply letter by amount of times 1000 goes into number
 * Add letter(s) to string answer
 * check next digit to see if it's a 4 or a 9
 * If 400, or 900, get value from map and add to string
 * Do this for all following values, finding corresponding values in map, and adding to answer
 * return answer to user
 *
 */

function intToRomanNumeral(int) {

  const numsToLetters = {
    "1": 'I',
    "4": "IV",
    "9": "IX",
    "10": "X",
    "40": "XL",
    "50": "L",
    "90": "XC",
    "100": "C",
    "400": "CD",
    "500": "D",
    "900": "CM",
    "1000": "M"
  };

  const numLength = String(int).length;
  let answer = "";

  for (let i = 0; i < numLength; i++) {
    let numAsStr = String(int)[i]
    let searchValue;

    if(numAsStr === '9' || numAsStr === "4"){
      searchValue = numAsStr + '0'* (numLength - i - 1) // Not sure this works
    }


  }
}