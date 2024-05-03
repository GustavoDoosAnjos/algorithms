function isPalindrome(input) {
  if (input.length == 0) {
    return true;
  }
  if (input[0] === input[input.length - 1]) {
    return isPalindrome(input.slice(1, input.length - 1));
  }
  return false;
}

console.log(isPalindrome('tacocat'));
