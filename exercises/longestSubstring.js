function findLongestSubstring(value) {
  if (value.length == 0) return 0;
  let frequency = {};

  for (let i = 0; i < value.length; i++) {
    if (value[i] in frequency) {
      console.log(value[i], i);
      return i;
    }
    frequency[value[i]] = frequency[value[i]]++;
  }
}

console.log(findLongestSubstring('thisisawesome'));
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit')
