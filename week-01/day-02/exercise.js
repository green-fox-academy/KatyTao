//1 - conditional-variable-mutation
'use strict';

const a = 24;
let out = 0;
// if a is even increment out by one
if (a % 2 === 0) {
    out++;
}
console.log(out);

const b = 13;
let out2 = '';
// if b is between 10 and 20 set out2 to 'Sweet!'
// if less than 10 set out2 to 'More!',
// if more than 20 set out2 to 'Less!'
if (b >= 10 && b <= 20) {
    out2 = `Sweet!`;
}else if (b < 10) {
    out2 = `More!`;
}else {
    out2 = `Less!`;
}
console.log(out2);

let c = 123;
const credits = 100;
const isBonus = false;
// if credits are at least 50,
// and isBonus is false decrement c by 2
// if credits are smaller than 50,
// and isBonus is false decrement c by 1
// if isBonus is true c should remain the same
if (credits >= 50 && isBonus === false) {
    c -= 2;
} else if (credits < 50 && isBonus === false) {
    c -= 1;
} else if (isBonus === true) {
    c += 0;
}
console.log(c);

const d = 8;
const time = 120;
let out3 = '';
// if d is dividable by 4
// and time is not more than 200
// set out3 to 'check'
// if time is more than 200
// set out3 to 'Time out'
// otherwise set out3 to 'Run Forest Run!'
if (d % 4 === 0 && time <= 200) {
    out3 = `check`;
}else if (time > 200) {
    out3 = `Time out`;
}else {
    out3 = `Run Forest Run!`;
}
console.log(out3);

//2 - i-like-trains
'use strict';
// Create a program that writes this line 100 times:
// 'I like trains!'
let count = 0;
while (count < 100) {
    console.log (`I like trains!`);
    count ++;
}

//3 - print-even
'use strict';
// Create a program that prints all the even numbers between 0 and 500
for (let a = 0; a <= 500; a++) {
    if (a % 2 === 0) {
        console.log(a);
    }
}

//4 - multiplication-table
'use strict';
const number = 15;
// Create a program that
// prints the multiplication table with number
let result = ``;
for (let multiplier = 1; multiplier <= 10; multiplier++) {
    result = multiplier.toString() + ` * ` + number.toString() +  ` = ` + (multiplier*number).toString();
    console.log(result);
}


//5 - fizz-buzz
'use strict';
// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.
for (let num = 0; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(`FizzBuzz`);
    }else if (num % 3 === 0) {
        console.log(`Fizz`);
    }else if (num % 5 === 0) {
        console.log(`Buzz`);         
    }else {
        console.log(num);
    }
}

//6 - draw-triangle
'use strict';
const lineCount = 4;
starNum = 1;
starLine = ``;
while (starNum <= lineCount) {
    starLine += `*`;
    console.log(starLine);
    starNum ++;
}
// Write a program that draws a
// triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
