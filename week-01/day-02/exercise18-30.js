//18 - third
"use strict";
// - Create a variable named `magicNumbers`
//   with the following content: `[1, 3, 5, 7]`
// - Print the third element of `magicNumbers`
let magicNumbers = [1, 3, 5, 7];
console.log(magicNumbers[2]);

//19 - compare-length
("use strict");
// - Create a variable named `p1`
//   with the following content: `[1, 2, 3]`
// - Create a variable named `p2`
//   with the following content: `[4, 5]`
// - Log to the console if `p2` has more elements than `p1`
let p1 = [1, 2, 3];
let p2 = [4, 5];
if (p2.length > p1.length) {
  console.log(p2);
}

//20 - sum-elements
("use strict");
// - Create a variable named `r` with the following content: `[54, 23, 66, 12]`
// - Print the sum of the second and the third element
let r = [54, 23, 66, 12];
console.log(r[1] + r[2]);

//21 - swap-elements
("use strict");

// - Create a variable named `abc` with the following content: `['Arthur', 'Boe', 'Chloe']`
// - Swap the first and the third element of `abc`
let abc = ["Arthur", "Boe", "Chloe"];
let temp = abc[0];
abc[0] = abc[2];
abc[2] = temp;
console.log(abc);

//22 - print-all

("use strict");

// - Create a variable named `af` with the following content: `[4, 5, 6, 7]`
// - Log each the element of `af` to the console*
// *hint: use a loop, console.log(af) won't cut it
// - bonus for using the correct built in array method
let af = [4, 5, 6, 7];
af.forEach(item => console.log(item));

//23 - change-element

("use strict");

// - Create an array named `s` with the following content: `[1, 2, 3, 8, 5, 6]`
// - Change the 8 to 4 with the `.map` method
// - Print the fourth element as a test
let s = [1, 2, 3, 8, 5, 6];
s = s.map(x => {
  if (x === 8) {
    return 4;
  }
  return x;
});
console.log(s[3]);

//24 - increment-element
("use strict");

// - Create a variable named `t` with the following content: `[1, 2, 3, 4, 5]`
// - Increment the third element simply by accessing it
// - Log the third element to the console
let t = [1, 2, 3, 4, 5];
t[2] = t[2] + 1;
console.log(t[2]);

//25 - append-s-array
("use strict");

// - Create a variable named `animals`
//   with the following content: `['dog', 'cat', 'kitten']`
// - Add all elements an `'s'` at the end
// - try to use built in functions instead of loops
let animals = ["dog", "cat", "kitten"];
animals.forEach(function(item, index) {
  this[index] = item + `s`;
}, animals);
console.log(animals);

//26 - double-items
("use strict");

// - Create an array variable named `ag` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// - Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`
let ag = ["Gin", "Whiskey", "Wine", "Beer"];
ag.forEach(function(item, index) {
  ag[index] = item + item;
}, ag);
console.log(ag);

//27 - colors
("use strict");

// - Create a two dimensional list
//   which can contain the different shades of specified colors
// - In `colors[0]` store the shades of green:
//   `'lime', 'forest green', 'olive', 'pale green', 'spring green'`
// - In `colors[1]` store the shades of red:
//   `'orange red', 'red', 'tomato'`
// - In `colors[2]` store the shades of pink:
//   `'orchid', 'violet', 'pink', 'hot pink'`

const colors = [];
colors[0] = [`lime`, `forest green`, `pale green`, `spring green`];
colors[1] = [`orange red`, `red`, `tomato`];
colors[2] = [`orchid`, `violet`, `pink`, `hot pink`];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

//28 - sum-all

("use strict");

// - Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// - Log the sum of the elements in `ai` to the console
let ai = [3, 4, 5, 6, 7];
let sum = 0;
ai.forEach(item => (sum += item));
console.log(sum);

//29 - diagonal-matrix
("use strict");

// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
let lineCount = 4;
for (var row = 1; row <= lineCount; row++) {
  let rowResult = ``;
  for (var col = 1; col <= lineCount; col++) {
    if (col === lineCount - row + 1) {
      rowResult += `1 `;
    } else {
      rowResult += `0 `;
    }
  }
  console.log(rowResult);
}

//30 - reverse

("use strict");

// - Create a variable named `aj`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements in `aj`
// 		- do it with the built in method
//		- do it with creating a new temp array and a loop
// - Print the elements of the reversed `aj`
let aj = [3, 4, 5, 6, 7];
let temp = [];
for (let index = aj.length - 1; index >= 0; index--) {
  temp.push(aj[index]);
}
//temp = aj.reverse();
console.log(temp);
