// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , 
// se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

function ehPalindromo (palavra){
  let contrario = palavra.split('').reverse().join('');
  if (palavra === contrario){
    return true;
  } else{
    return false;
  }
  
  // let meuArrayReverso = palavra.split("",palavra.length);
  // meuArrayReverso.reverse();
  // let meuArrayOriginal = palavra.split("",palavra.length);
  // console.log(meuArrayOriginal);
  // console.log(meuArrayReverso);
  // for(let index in meuArrayOriginal){
  //   if(meuArrayOriginal[index] != meuArrayReverso[index]){
  //     return false;
  //   }
  // }
  // return true;
}

console.log(ehPalindromo('arara'));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 

function indiceMaiorValor(arrayInt){
  let valorMaior = arrayInt[0];
  for(let indice in arrayInt){
    if (arrayInt[indice] > valorMaior){
      valorMaior = arrayInt[indice];
      indiceValor = indice;
    }
  }
  return indiceValor;
}
console.log(indiceMaiorValor([2, 23, 6, 7, 10, 1]));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function indiceMenorValor(arrayInt){
  let valorMenor = arrayInt[0];
  for(let indice in arrayInt){
    if (arrayInt[indice] < valorMenor){
      valorMenor = arrayInt[indice];
      indiceValor = indice;
    }
  }
  return indiceValor;
}
console.log(indiceMenorValor([2, 4, 6, 7, 10, 0, -3]));

//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete ?????????
function inteiroRepete(arrayInt){
  let valorRepetido = arrayInt[0];
  for(let i=1; i< arrayInt.length; i++){
    if (arrayInt[i] === valorRepetido){
      valorRepetido = arrayInt[i];
    }
  }
  return valorRepetido;
}
console.log(inteiroRepete([2, 3, 9, 5, 8, 1, 4]));

//6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
function somaN (n){
  let soma = 0;
  for(let i = 1; i<=n; i++){
    soma += i;
  }
  return soma;
}

console.log(somaN(5));

