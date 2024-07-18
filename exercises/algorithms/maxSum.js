function maxSubarraySum(array, window) {
  let tempSum = 0;
  let maxSum = 0;

  if (array.length < window) return null;

  for (let i = 0; i < window; i++) {
    maxSum += array[i];
  }
  tempSum = maxSum;

  for (let i = window; i < array.length; i++) {
    tempSum = tempSum - array[i - window] + array[i];
    maxSum = Math.max(tempSum, maxSum);
    console.log(maxSum);
  }
  return maxSum;
}

maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
// maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
// maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
// maxSubarraySum([2, 3], 3); // null
