function sort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    var mid = pivot(array, left, right);

    sort(array, left, mid - 1);
    sort(array, mid + 1, right);
  }

  return array;
}

function pivot(array, start = 0, end = array.length - 1) {
  let pivot = array[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > array[i]) {
      swapIdx++;
      swap(array, swapIdx, i);
    }
  }
  swap(array, start, swapIdx);
  return swapIdx;
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}
console.log(sort([5, 2, 4, 6, 7, 8]));
