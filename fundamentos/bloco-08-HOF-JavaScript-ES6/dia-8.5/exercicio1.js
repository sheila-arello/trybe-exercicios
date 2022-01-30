// Exercicio 1
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];
console.log('Exercicio 1');
rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle)); // altere a chamada da funcao rectangleArea
});

// Exercicio 2
const sum = (...args) => {
  return args.reduce((acc, curV) => acc + curV);
};
console.log('Exercicio 2');
console.log('A soma é ' + sum(13, 45, 67, 23, 45));

// Exercicio 3
const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

console.log('Exercicio 3');
console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

// Exercicio 4
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo
const filterPeople = (peoples) => {
  return peoples.filter(({bornIn, nationality}) => (bornIn > 2000 && nationality === 'Australian'));
};
// gabarito
// const filterPeople = (arr) => arr.filter(
//   ({ nationality, bornIn }) =>
//     nationality === 'Australian'
//     && bornIn > 1900 && bornIn <= 2000,
//   );
console.log('Exercicio 4');
console.log(filterPeople(people));

// Exercicio 5
// Na chamada do objeto passamos o array a ser desestruturado,
// o parametro da função toObject é o array que contem os indices 
// do array original, que serão as chaves do novo objeto. Como se trata de array e o index 
// nao é definido, podemos usar qualquer nome para representar cada indice do array
const myList = [1, 2, 3];
// const [n1, n2, n3] = myList;
const swap = ([n1, n2, n3]) => [n3, n2, n1];

console.log('Exercicio 5');
console.log(swap(myList));

// exrcicio 6
// Escreva toObject abaixo
// Na chamada do objeto passamos o array a ser desestruturado,
// o parametro da função toObject é o array que contem os indices 
// do array original, que serão as chaves do novo objeto. Como se trata de array e o index 
// nao é definido, podemos usar qualquer nome para representar cada indice do array
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([modelo, marca, ano]) => ({
  modelo: modelo,
  marca: marca,
  ano: ano
});

console.log('Exercicio 6');
console.log(toObject(palio));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));

// exrcicio 7
// escreva shipLength abaixo: Escreva uma função shipLength que, dado um objeto representando um navio, 
// retorna o comprimento dele, mostrando também a devida unidade de comprimento:
// Dica: use object destructuring .

const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

// Para usar o destructurin de um objeto, os parametros devem estar entre chaves
const shipLength = ({name, length, measurementUnit}) => `${name} is ${length} ${measurementUnit} long`;

console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'

// Exercico 8
// Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
// Dica: use default params

// escreva greet abaixo
const greet = (name, strGreet = 'Oi') => `${strGreet} ${name}`;

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'

// Exercicio 9
// Existe um objeto yearSeasons que representam as estações do ano. Cada estação é uma chave deste objeto 
// e o valor de cada chave é um array de strings, representando os meses daquela estação. 
// A partir deste objeto, desestruture as estações do ano e espalhe-as em um array de meses do ano.
// Dica : use object destructuring e spread operator .
// OBS : As estações do ano aqui descritas têm base nas estações do hemisfério norte.

const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const monthOfYear = ({spring, summer, autumn, winter}) => [...spring, ...summer, ...autumn, ...winter];
console.log(monthOfYear(yearSeasons));
