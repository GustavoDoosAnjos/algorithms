// soma

function soma(array) {
  if (array.length === 1) {
    return array[0];
  }
  return array[0] + soma(array.slice(1));
}

// console.log(soma([5, 2, 3]));

//itens

function numeroItens(array) {
  if (array.length === 1) {
    return 1;
  }
  return 1 + numeroItens(array.slice(1));
}

// console.log(numeroItens([5, 2, 3, 2, 1, 4]));

function max(array) {
  if (array.length === 1) {
    return array[0];
  }
  return Math.max(array[0], max(array.slice(1)));
}

console.log(max([5, 2, 7, 2, 1, 4]));
