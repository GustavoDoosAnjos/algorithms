function sort(array) {
  for (let i = 0; i < array.length; i++) {
    var lowest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j;
      }
    }
    if (array[lowest] !== array[i]) {
      swap(array, lowest, i);
    }
  }
  return array;
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

console.log(sort([5, 2, 3, 4, 1, 7, 8, 9]));
