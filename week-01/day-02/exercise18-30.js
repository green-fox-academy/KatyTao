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
if (p2.length > p1.length) {
    console.log(p2);
}

//20 - sum-elements
'use strict';
// - Create a variable named `r` with the following content: `[54, 23, 66, 12]`
// - Print the sum of the second and the third element
let r = [54, 23, 66, 12];
console.log(r[1]+r[2]);

//21 - swap-elements
'use strict';

// - Create a variable named `abc` with the following content: `['Arthur', 'Boe', 'Chloe']`
// - Swap the first and the third element of `abc`
let abc = ['Arthur', 'Boe', 'Chloe'];
let temp = abc[0];
abc[0] = abc[2];
abc[2] = temp;
console.log(abc);


//22 - print-all
  
'use strict';

// - Create a variable named `af` with the following content: `[4, 5, 6, 7]`
// - Log each the element of `af` to the console*
// *hint: use a loop, console.log(af) won't cut it
// - bonus for using the correct built in array method
let af = [4, 5, 6, 7];
af.forEach(item  => console.log(item));


//23 - change-element

'use strict';

// - Create an array named `s` with the following content: `[1, 2, 3, 8, 5, 6]`
// - Change the 8 to 4 with the `.map` method 
// - Print the fourth element as a test
let s = [1, 2, 3, 8, 5, 6];
s = s.map(x => {
    if (x === 8){
        return 4;
    }
    return x;
})
console.log(s[3]);
