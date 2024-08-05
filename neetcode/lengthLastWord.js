var lengthOfLastWord = function (s) {
  const words = s.split(' ').filter(word => word !== '');

  return words[words.length - 1].length;
};

/**
split the string into an array on spaces
filter out array values that are empty strings
get the last value of array and return length

 */

console.log(lengthOfLastWord("   fly me   to   the moon  "));