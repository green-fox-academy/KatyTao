//18 - third
'use strict';
// - Create a variable named `magicNumbers`
//   with the following content: `[1, 3, 5, 7]`
// - Print the third element of `magicNumbers`
let magicNumbers = [1, 3, 5, 7];
console.log(magicNumbers[2]);

//19 - compare-length
'use strict';
// - Create a variable named `p1`
//   with the following content: `[1, 2, 3]`
// - Create a variable named `p2`
//   with the following content: `[4, 5]`
// - Log to the console if `p2` has more elements than `p1`
let p1 = [1, 2, 3];
let p2 = [4, 5];
if (p2.length() > p1.length()) {
    console.log(p2);
}