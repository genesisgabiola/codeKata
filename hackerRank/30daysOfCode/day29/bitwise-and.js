'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}


/* ******************************************************* */
/* ------------------- SOLUTION START -------------------- */
function main() {
  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const a = k - 1;
    const b = (~a) & -(~a);

    if ((a | b) > n)
      console.log(a - 1);
    else
      console.log(a);
  }
}
/* -------------------- SOLUTION END --------------------- */
/* ******************************************************* */