// 1. store the element that says 'The King' in the 'king' variable.
// console.log it.
const king = document.querySelector('#b325');
console.log(king);

// 2. store 'The Businessman' and 'The Lamplighter'
// in the 'businessLamp' variable.
const businessLamp = document.querySelectorAll('.big');
console.log(businessLamp);

// 3. store 'The King' and 'The Conceited Man'
// in the 'conceitedKing' variable.
const temp = document.getElementsByClassName('asteroid');
let conceitedKing = [];
for (let i = 0; i < temp.length; i++) {
  if(temp[i].innerHTML === 'The King' || temp[i].innerHTML ===  'The Conceited Man') {
    conceitedKing.push(temp[i]);
  }
}
console.log(conceitedKing);

// 4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
// in the 'noBusiness' variable.
const noBusiness = document.querySelectorAll(`div.asteroid`);
console.log(noBusiness);

