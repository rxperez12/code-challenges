
function groupAnagrams(strs) {
  const stringsHash = new Map();
  const charCodeA = 'a'.charCodeAt(0);

  for (const str of strs) {
    const letterCount = new Array(26);
    letterCount.fill(0);

    for (let i = 0; i < str.length; i++) {
      const letterNum = str.charCodeAt(i) - charCodeA;
      letterCount[letterNum]++;
    }

    const key = letterCount.join(',');
    console.log("key", key);
    let value = stringsHash.get(key) || [];
    value.push(str);

    stringsHash.set(key, value);
  }

  return [...stringsHash.values()];
}


console.log(groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"]))


/**
 *
 */