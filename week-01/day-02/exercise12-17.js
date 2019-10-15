//12 - doubling
'use strict';
// - Create a variable named `ak` and assign the value `123` to it
// - Create a function called `doubling` that doubles it's input parameter
// - Log the result of `doubling(ak)` to the console
let ak = 123;
function doubling(parm1) {
    return parm1*2;
}
console.log(doubling(ak));

//13 - greet
'use strict';
// - Create variable named `al` and assign the value `EPAM` to it
// - Create a function called `greet` that greets it's input parameter
//     - Greeting is printing e.g. `Greetings, dear EPAM`
//     - Prepare for the special case when no parameters are given
// - Greet `al`
let a1 = `EPAM`;
function greet(parm1) {
    if (a1 !== ``) {
        return `Greetings, dear ${parm1}`;
    }else {
        return `Please input your name`;
    }
}
console.log(greet(a1));

//14 - append-s
'use strict';

// - Create a variable named `am` and assign the value `dog` to it
// - Write a function called `appendS` that gets a string as an input
//   and appends an 's' character to its end
// - Print the result of `appendS(am)` to the console
let am = `dog`;
function appendS(parm1) {
    return parm1.toString() + `S`;
}
console.log(appendS(am));

//15 - sum
'use strict';
// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result
function sum() {
    let sum = 0;
    len = arguments.length;
    for (let i = 0; i < len; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(sum(2,3,4));

//16 - factorio
'use strict';
// - Create a function called `factorio`
//   that returns it's input's factorial
function factorio(parm1) {
    if (parm1 === 1) {
        return 1;
    }else {
        return parm1 * factorio(parm1-1);
    }
}
console.log(factorio(3));
