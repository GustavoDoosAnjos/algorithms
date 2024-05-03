function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (array[mid] == target) {
      return mid;
    }
    if (array[mid] < target) {
      left = mid + 1;
    }
    if (array[mid] > target) {
      right = mid - 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2));
