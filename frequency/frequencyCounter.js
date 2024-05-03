// Write an algorithmn that receives two arrays, one with normal numbers and the other with the same numbers squared and tell if they are the same

// naive

// function same(array, squared) {
//   if (array.length !== squared.length) {
//     return false;
//   }
//   for (let value of array) {
//     let correctIndex = squared.indexOf(value ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     console.log(squared);
//     squared.splice(correctIndex, 1);
//   }
//   return true;
// }

// same([1, 2, 3], [1, 4, 9]);

// best

function same(array, squared) {
  if (array.length !== squared.length) {
    return;
  }

  let frequencyArray = {};
  let frequencySquared = {};

  for (let value of array) {
    frequencyArray[value] = (frequencyArray[value] || 0) + 1;
  }
  for (let square of squared) {
    frequencySquared[square] = (frequencySquared[square] || 0) + 1;
  }

  for (let key in frequencyArray) {
    if (!(key ** 2 in frequencySquared)) {
      return false;
    }
    if (frequencyArray[key] !== frequencySquared[key ** 2]) {
      return false;
    }
  }
  return true;
}

// same([1, 2, 3], [1, 4, 9]);
