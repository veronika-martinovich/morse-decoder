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
  
  let arrZeroOne = [];
  for (let j = 0; j < arr.length; j++) {
    for (let k = 0; k < arr[j].length; k++) {
      if (arr[j][k] == 0) continue;
      if ((arr[j][k] == 1) || (arr[j][k] === '*')) {
      let letterZeroOne = arr[j].slice(k);
      arrZeroOne.push(letterZeroOne);
      break;
      }
    }
  }

  let arrMorse = [];
  for (let n = 0; n < arrZeroOne.length; n++) {
    let letterMorse = '';
    for (let p = 0; p < arrZeroOne[n].length; p += 2) {
      if (arrZeroOne[n][p] == 1 && ((arrZeroOne[n][p+1]) == 0)) {
      letterMorse += '.';
      }
      if (arrZeroOne[n][p] == 1 && ((arrZeroOne[n][p+1]) == 1)) {
      letterMorse += '-';
      }
      if (arrZeroOne[n][p] == '*' && ((arrZeroOne[n][p+1]) == '*')) {
        letterMorse += ' ';
        break;
        }
    }
    arrMorse.push(letterMorse);
  }
  
  let arrAlphabetic = [];
  for (let m = 0; m < arrMorse.length; m++) {
    if (arrMorse[m] != ' ') {
    let letterAlphabetic = MORSE_TABLE[arrMorse[m]];
    arrAlphabetic.push(letterAlphabetic);
    }
   else {
    arrAlphabetic.push(' ')
    }
  }
  let phrase = arrAlphabetic.join('');
  return phrase;
  }

module.exports = {
    decode
}