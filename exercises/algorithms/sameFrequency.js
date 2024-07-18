function sameFrequency(number, duplicate) {
  if (number.length !== duplicate.length) {
    return false;
  }
  const numbersArray = number.toString().split('');
  const duplicateArray = duplicate.toString().split('');

  let numberFrequency = {};
  let duplicateFrequency = {};

  for (let value of numbersArray) {
    numberFrequency[value] = (numberFrequency[value] || 0) + 1;
  }
  for (let value of duplicateArray) {
    duplicateFrequency[value] = (duplicateFrequency[value] || 0) + 1;
  }

  for (let value in numberFrequency) {
    if (!(value in duplicateFrequency)) {
      return false;
    }

    if (numberFrequency[value] !== duplicateFrequency[value]) {
      return false;
    }
  }
  return true;
}

sameFrequency(182, 281); // true
// sameFrequency(34, 14); // false
// sameFrequency(3589578, 5879385); // true
// sameFrequency(22, 222); // false
