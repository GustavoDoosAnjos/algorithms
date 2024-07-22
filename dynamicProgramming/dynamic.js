function fibo(number) {
  const memory = {};
  function fib(number) {
    if (number <= 2) {
      return 1;
    }
    if (number in memory) {
      return memory[number];
    } else {
      memory[number] = fib(number - 1) + fib(number - 2);
    }

    return memory[number];
  }

  return fib(number);
}

console.log(fibo(1000));
