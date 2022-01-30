const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
function authorBornIn1947(array) {
  // escreva aqui o seu código
  const bornIn1947 = array.find((element) => element.author.birthYear === 1947);
  return bornIn1947.author.name;
}

console.log(authorBornIn1947(books));

// 2 - Retorne o nome do livro de menor nome.
// Dica: use a função forEach
function smallerName(array) {
  // let nameBook;
  // escreva aqui o seu código
  const arrayTamanho = [];
  array.forEach(element => {
    const str = element.name;
    arrayTamanho.push(str.length);
  });
  // const minValue = arrayTamanho.map(Number).reduce((a, b, index) => [Math.min(a, b), index]);
  const minValue = arrayTamanho.reduce((a, b) => Math.min(a, b));
  const index = arrayTamanho.indexOf(minValue);
  // O index do arrayTamanho com o valor minimo será o mesmo index do array books
  return array[index].name;
}

console.log(smallerName(books));