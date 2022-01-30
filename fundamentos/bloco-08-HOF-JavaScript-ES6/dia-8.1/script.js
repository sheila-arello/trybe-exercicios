// 1. Crie uma função que retorne um objeto no formato { nomeCompleto, email } 
const pessoaContratada = (nome) => {
  const email = `${(nome.toLowerCase().replace(' ', '_'))}@trybe.com`;
  return { nome: nome, email: email };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva') // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(pessoaContratada));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 
// recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual 
// ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const sorteio = (number, numeroSorteado) => number === numeroSorteado;

const resutadoSorteio = (number, callback) => {
  const numeroSorteado = parseInt((Math.random() * 5) +1);
  const result = callback(number, numeroSorteado);
  // if (result) {
  //   return 'Parabéns você ganhou';
  // }
  // return 'Tente novamente';

  return result ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(resutadoSorteio(4, sorteio));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), 
// o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se 
// as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o 
// total da contagem de respostas certas.
//    Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, 
//    e quando não houver resposta ("N.A") não altera-se a contagem.

const isCorrect = (respostaCerta, respostaDada) => respostaDada === respostaCerta;

const checkAnswers = (arrOk, arrValues, callback) => {
  let countOk = 0.0;
  for (let index of arrValues) {
    if (arrValues[index] !== 'N.A') {
      if (callback(arrOk[index], arrValues[index])) {
        countOk += 1;
      } else {
        countOk -= 0.5;
      }
    }
  }
  return countOk;
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(typeof RIGHT_ANSWERS);
console.log(checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, isCorrect));