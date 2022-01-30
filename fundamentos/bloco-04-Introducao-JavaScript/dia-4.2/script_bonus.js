let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

let numbers_2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < numbers_2.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers_2[index] > numbers_2[secondIndex]) {
      let position = numbers_2[index];
      numbers_2[index] = numbers_2[secondIndex];
      numbers_2[secondIndex] = position;
    }
  }
}
console.log(numbers_2);

let numbers_3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoNumbers = [];
for (let index = 0; index < numbers_3.length; index += 1) {
  if (index === numbers_3.length - 1){
    novoNumbers.push(numbers_3[index] * 2);
  } else {
    novoNumbers.push(numbers_3[index] * numbers_3[index+1]);
  }
}
console.log(novoNumbers);