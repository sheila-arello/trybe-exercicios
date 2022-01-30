// Exemplo de reduce com string e chave dinamica

const array = ['xablau', 2, true, [1,2,3], {a:1,b:2}];

const novoObj = array.reduce((acc, curr, index) => {
  return {
    ...acc,
    [`chave${index}`]: curr,
  }
}, {});

console.log(novoObj);