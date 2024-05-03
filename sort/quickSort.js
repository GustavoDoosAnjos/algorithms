function sort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    var mid = pivot(array, left, right);

    sort(array, left, mid - 1);
    sort(array, mid + 1, right);
  }

  return array;
}

function pivot(array, start = 0, end = array.length - 1) {
  var pivot = array[start];
  var swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > array[i]) {
      swapIdx++;
      swap(array, swapIdx, i);
    }
  }
  swap(array, swapIdx, start);
  return swapIdx;
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

let arr = [11, 2, 1, 8, 4, 7, 6, 3];

console.log(sort(arr));
