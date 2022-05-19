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
console.log(generatePhoneNumber([]));
// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
