let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1
for (num of numbers) {
  console.log(num);
}

// 2 e 3 e 4
var soma = 0;
var media = 0;
for (num of numbers) {
  soma += num;
}
media = soma/numbers.length;
console.log("");
console.log("Soma =", soma);
console.log("Media =", media);
if (media > 20){
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

// 5 - Imprimir o maior valor do array
var maiorValor = numbers[0];
for (let i = 1; i < numbers.length; i++){
  if (numbers[i] > maiorValor){
    maiorValor = numbers[i];
  }
}
console.log("");
console.log("Maior valor do array: " + maiorValor);

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. 
// Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
var numValoresImpares = 0;
for (let i = 0; i < numbers.length; i++){
  if ((numbers[i] % 2) !=0){
    numValoresImpares++;
  }
}
console.log("");
if (numValoresImpares == 0){
  console.log("nenhum valor ímpar encontrado");
} else {
  console.log("Foram encontrados " + numValoresImpares + " valores ímpares");  
}

// 7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;
var menorValor = numbers[0];
for (let i = 1; i < numbers.length; i++){
  if (numbers[i] < menorValor){
    menorValor = numbers[i];
  }
}
console.log("");
console.log("Menor valor do array: " + menorValor);


// 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let valoresAte25 = [];
for (let i = 0; i < 25; i++){
  valoresAte25.push(i+1);
}
console.log("");
console.log("Array de 1 a 25: " + valoresAte25);
console.log("");

// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
for (let i = 0; i < 25; i++){
  console.log("Divisão por 2: " + valoresAte25[i]/2);
}

//Mega Sena
let megaSennaNumbers = [];
for (let i = 0; i < 6; i++){
  megaSennaNumbers.push(Math.floor(Math.random()*60)+1);
}
console.log("");
console.log(megaSennaNumbers);

