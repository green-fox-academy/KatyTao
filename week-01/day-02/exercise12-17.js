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
        return `Greetings, dear ` + parm1.toString();
    }else {
        return `Please input your name`;
    }
}
console.log(greet(a1));