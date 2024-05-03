function areThereDuplicates(...arguments) {
  let frequency = {};
  for (let value of arguments) {
    frequency[value] = (frequency[value] || 0) + 1;
  }

  for (let value in frequency) {
    if (frequency[value] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
areThereDuplicates('a', 'b', 'c', 'a'); // true
