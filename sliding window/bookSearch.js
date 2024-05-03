const inputs = [
  12, 9, 23, 17, 25, 19, 4, 8, 21, 34, 26, 17, 19, 14, 27, 22, 15, 7, 2, 14, 5,
  18, 24,
];

function maxSum(array, window) {
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < window; i++) {
    maxSum += array[i];
  }
  tempSum = maxSum;
  for (let i = window; i < array.length; i++) {
    tempSum = tempSum - array[i - window] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
maxSum(inputs, 5);
