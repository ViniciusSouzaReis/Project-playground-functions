// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 && boolean2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let array = frase.split(' ');
  return array;
}

// Desafio 4
function concatName(names) {
  let display = names[names.length - 1] + ", " + names[0];
  return display;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins;
  vitorias *= 3;
  let pontos = vitorias + ties;
  return pontos;
}

// Desafio 6
function higherValue (numbers) {
  let hValue = numbers[0];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > hValue) {
      hValue = numbers[i];
    }
  }
  return hValue;
}

function highestCount(numbers) {
  let valueCount = 0;
  let valueMaximum = higherValue(numbers);
  for (let index = 0; index < numbers.length; index += 1) {
    if (valueMaximum === numbers[index]) {
      valueCount += 1;
    }
  }
  return valueCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);
  if (distance1 < distance2) {
    return 'cat1';
  } else if (distance1 === distance2) {
    return 'os gatos trombam e o rato foge';
  }
    return 'cat2';
}

// Desafio 8
function fizzBuzz(numbers) {
  let displayString = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      displayString.push('fizzBuzz');
    } else if (numbers[i] % 3 === 0) {
      displayString.push('fizz');
    } else if (numbers[i] % 5 === 0) {
      displayString.push('buzz');
    } else {
      displayString.push('bug!');
    }
  }
  return displayString;
}

// Desafio 9
function encodeCondition (letter) {
  if (letter === "a") {
    letter = 1;
  } else if (letter === "e") {
    letter = 2;
  } else if (letter === "i") {
    letter = 3;
  } else if (letter === "o") {
    letter = 4;
  } else if (letter === "u") {
    letter = 5;
  }
  return letter;
}

function encode(text) {
  let code = '';
  let letter = '';
  for (let i = 0; i < text.length; i += 1) {
    letter = text[i];
    letter = encodeCondition(letter);
    code += letter;
  }
  return code;
}

function decodeCondition(sentence) {
  if (sentence === '1') {
    sentence = 'a';
  } else if (sentence === '2') {
    sentence = 'e';
  } else if (sentence === '3') {
    sentence = 'i';
  } else if (sentence === '4') {
    sentence = 'o';
  } else if (sentence === '5') {
    sentence = 'u';
  }
  return sentence;
}

function decode(text2) {
  let transformer = '';
  let sentence = '';
  for (let i = 0; i < text2.length; i += 1) {
    sentence = text2[i];
    sentence = decodeCondition(sentence);
    transformer += sentence;
  }
  return transformer;
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
