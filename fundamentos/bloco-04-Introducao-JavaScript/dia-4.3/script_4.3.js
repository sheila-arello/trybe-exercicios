// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, 
// seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n=9;
let str = "";

for (let i=1; i<=n; i++){
  str = "";
  for (let j=1; j<=n; j++){
    str += "*";
  }
  console.log(str);
}
console.log("");

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo 
// retângulo com 5 asteriscos de base.
str = "";
for (let i=1; i<=n; i++){
  str = "";
  for (let j=1; j<=i; j++){
    str += "*";
  }
  console.log(str);
}
console.log("");

// 3- Agora inverta o lado do triângulo. Por exemplo:
str = "";
for (let i=1; i<=n; i++){
  str = "";
  for (let j=1; j<=i; j++){
    str += "*";    
  }
  str = str.padStart(n," ");
  console.log(str);
}
console.log("");

// 4- Depois, faça uma pirâmide com n asteriscos de base:
str = "";
let espacos = "";
for (let i=1; i<=n; i+=2){
  str = "";
  for (let j=1; j<=i; j++){
    str += "*";
    espacos = "";   
    for (let k=1; k<=((n-i)/2); k++){
      espacos += " ";
    } 
  }
  // n - str.length /2 espacos de cada lado
  //let num_espacos = n-i;
  str = espacos + str + espacos;
  //str = str.padEnd(n," ");
  console.log(str);
}
console.log("");

// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. 
// Assuma que o valor de n será sempre ímpar:
str = "";
let espacos = "";
for (let i=1; i<=n; i+=2){
  str = "";
  for (let j=1; j<=i; j++){
    str += "*";
    espacos = "";   
    for (let k=1; k<=((n-i)/2); k++){
      espacos += " ";
    } 
  }
  // n - str.length /2 espacos de cada lado
  //let num_espacos = n-i;
  str = espacos + str + espacos;
  //str = str.padEnd(n," ");
  console.log(str);
}
console.log("");

