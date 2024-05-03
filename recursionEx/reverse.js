function reverse(input) {
  let total = [];
  function helper(input) {
    if (input.length <= 0) return;

    total.push(input[input.length - 1]);

    helper(input.slice(0, input.length - 1));
  }
  helper(input);

  return total.join('');
}

console.log(reverse('rithmschool'));

// base case: input.length <= 0

// incrementa o array total com o ultimo indice
// remove o ultimo indice com slice
// chama a função dnv
