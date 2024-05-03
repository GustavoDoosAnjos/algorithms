function isSubsequence(substring, sentence) {
  let i = 0;
  let j = 0;

  while (j < sentence.length) {
    if (substring[i] === sentence[j]) i++;

    if (substring.length === i) {
      return true;
    }
    j++;
  }
  return false;
}

console.log(isSubsequence('abc', 'acb')); //false
console.log(isSubsequence('hello', 'hello world')); //tru
