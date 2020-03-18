const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

  let arr = [];
  for (let i = 0; i < expr.length; i += 10) {
    let letter = expr.slice(i, (i + 10));
    arr.push(letter);
    } 
  
  let arrBinary = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 0) continue;
      if ((arr[i][j] == 1) || (arr[i][j] === '*')) {
      let letterBinary = arr[i].slice(j);
      arrBinary.push(letterBinary);
      break;
      }
    }
  }

  let arrMorse = [];
  for (let i = 0; i < arrBinary.length; i++) {
    let letterMorse = '';
    for (let j = 0; j < arrBinary[i].length; j += 2) {
      if (arrBinary[i][j] == 1 && ((arrBinary[i][j+1]) == 0)) {
      letterMorse += '.';
      }
      if (arrBinary[i][j] == 1 && ((arrBinary[i][j+1]) == 1)) {
      letterMorse += '-';
      }
      if (arrBinary[i][j] == '*' && ((arrBinary[i][j+1]) == '*')) {
        letterMorse += ' ';
        break;
        }
    }
    arrMorse.push(letterMorse);
  }
  
  let arrAlphabetic = [];
  for (let i = 0; i < arrMorse.length; i++) {
    if (arrMorse[i] != ' ') {
    let letterAlphabetic = MORSE_TABLE[arrMorse[i]];
    arrAlphabetic.push(letterAlphabetic);
    }
    else {
    arrAlphabetic.push(' ')
    }
  }

  return arrAlphabetic.join('');
  }

module.exports = {
    decode
}