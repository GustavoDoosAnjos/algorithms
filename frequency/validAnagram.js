// receive two strings and determine if the second is an anagram of the first

function validAnagram(word, anagram) {
  if (word.length !== anagram.length) {
    return false;
  }
  let frequencyLetter = {};
  let frequencyAnagram = {};

  for (let letter of word) {
    frequencyLetter[letter] = (frequencyLetter[letter] || 0) + 1;
  }

  for (let letter of anagram) {
    frequencyAnagram[letter] = (frequencyAnagram[letter] || 0) + 1;
  }

  for (let key in frequencyLetter) {
    if (!(key in frequencyAnagram)) {
      return false;
    }

    if (frequencyLetter[key] !== frequencyAnagram[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram('uss', 'sus'));
