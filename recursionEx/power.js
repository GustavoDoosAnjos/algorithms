function power(base, exponent) {
  if (exponent == 0) return 1;
  return base * power(2, exponent - 1);
}

console.log(power(2, 2));
