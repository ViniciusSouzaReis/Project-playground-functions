// Desafio 11
function repetibleNumber(array) {
  let numeroRepetido = 0;
  let contNumero = 0;
  let indexNumeroMaisRepete = 0;
  for (let i = 0; i < array.length; i += 1) {
    for (let index = 0; index < array.length; index += 1){
      if (array[i] === array[index]) {
        numeroRepetido += 1; 
      }
    }
      if (numeroRepetido > contNumero) {
          contNumero = numeroRepetido;
          indexNumeroMaisRepete = i;
      }
      numeroRepetido = 0;
  }
  return array[indexNumeroMaisRepete];
}

function repetable(array) {
  let countable = 0;
  let sameNumber = repetibleNumber(array);
  for (let i = 0; i < array.length; i += 1) {
    if (sameNumber === array[i]) {
      countable += 1;
    }
  }
  return countable;
}

function generatePhoneNumber(array) {
  let counter = repetable(array);
  let tellphone = "";
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < array.length; i += 1 ) {
    if (array[i] < 0 || array[i] > 9 || counter > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  tellphone += '(' + array[0] + array[1] + ')' + ' ';
  for (let index = 2; index < 7; index += 1) {
    tellphone += array[index]; 
  }
  tellphone += "-";
  for (let index2 = 7; index2 < 11; index2 += 1) {
    tellphone += array[index2];
  }
  return tellphone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let difAB = Math.abs(lineA - lineB);
  let difAC = Math.abs(lineA - lineC);
  let difBC = Math.abs(lineB - lineC);
  let sumAB = lineA + lineB;
  let sumAC = lineA + lineC;
  let sumBC = lineB + lineC;
  if (sumAB > lineC && sumAC > lineB && sumBC > lineA && lineA > difBC && lineB > difAC && lineC > difAB) {
    return true;
  }
    return false;
}

// Desafio 13
function sumNumbers (string) {
  let removeNumber = string;
  let formula = /\d+/g;
  let result = removeNumber.match(formula);
  let numbers = 0;
  let sum = 0;
  for (let i = 0; i < result.length; i += 1) {
    numbers = parseInt(result[i]);
    sum += numbers;
    numbers = 0;
  }
  return sum;
}

function hydrate(string) {
  let phrase;
  let soma = sumNumbers(string);
  if (soma === 1) {
    phrase = soma + ' copo de água';
  } else {
    phrase = soma + ' copos de água';
  }
  return phrase;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
