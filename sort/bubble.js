function sort(array) {
  for (let i = array.length; i > 0; i--) {
    var noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      noSwap = true;
      if (array[j] > array[j + 1]) {
        noSwap = false;
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

console.log(sort([5, 3, 4, 2, 6, 7]));
