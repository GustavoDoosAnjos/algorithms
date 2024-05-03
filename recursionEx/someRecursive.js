function someRecursive(array, func) {
  if (array.length == 0) {
    return false;
  }
  const first = array[0];
  if (func(first)) {
    return true;
  }
  return someRecursive(array.slice(1), func);
}

console.log(someRecursive([4, 6, 8], (val) => val > 10));
console.log(someRecursive([1, 2, 3, 4], (val) => val % 2 !== 0));

[, 9];
