function sort(nums) {
  const maxDigits = mostDigits(nums);

  for (let k = 0; k < maxDigits; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let index = getDigit(nums[i], k);
      digitBuckets[index].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

function getDigit(num, place) {
  return Math.floor((Math.abs(num) / Math.pow(10, place)) % 10);
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

console.log(sort([1, 123, 4545452, 112, 22, 123214, 5545]));
