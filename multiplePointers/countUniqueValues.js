// write a function that writes unique values;
function countUniqueValues(numbers) {
  let leftPointer = 0;
  if (numbers.length <= 0) {
    return 0;
  }

  for (let rightPointer = 1; rightPointer < numbers.length; rightPointer++) {
    if (numbers[leftPointer] != numbers[rightPointer]) {
      leftPointer++;
      numbers[leftPointer] = numbers[rightPointer];
    }
  }

  return leftPointer + 1;
}

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4

// console.log(
//   `ARRAY: ${numbers}\n LEFT: ${leftPointer}\n RIGHT: ${rightPointer}`
// );
