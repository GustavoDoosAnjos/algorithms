function sumZero(numbers) {
  let leftPointer = 0;
  let rightPointer = numbers.length - 1;
  let result;

  while (leftPointer < rightPointer) {
    result = numbers[leftPointer] + numbers[rightPointer];

    if (result < 0) {
      leftPointer++;
    }
    if (result > 0) {
      rightPointer--;
    }
    if (result == 0) {
      return [numbers[leftPointer], numbers[rightPointer]];
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 3, 5]));
