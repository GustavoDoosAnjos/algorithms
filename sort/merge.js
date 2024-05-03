function sort(array) {
  if (array.length <= 1) {
    return array;
  }
  var mid = Math.floor(array.length / 2);
  var left = array.slice(0, mid);
  var right = array.slice(mid);

  return merge(sort(left), sort(right));
}

function merge(firstArray, secondArray) {
  var mergedArray = [];

  var i = 0;
  var j = 0;

  while (i < firstArray.length && j < secondArray.length) {
    if (firstArray[i] < secondArray[j]) {
      mergedArray.push(firstArray[i]);
      i++;
    } else {
      mergedArray.push(secondArray[j]);
      j++;
    }
  }

  while (i < firstArray.length) {
    mergedArray.push(firstArray[i]);
    i++;
  }

  while (j < secondArray.length) {
    mergedArray.push(secondArray[j]);
    j++;
  }

  return mergedArray;
}

console.log(sort([2, 12, 3, 5, 1234, 4, 6, 7, 10, 14, 15, 16]));
