'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds
// const useCallback = callback => {
//     callback(`apple`);
//     setTimeout(callback(`pear`),1000);
// }

// useCallback(printFruit);

console.log(`apple`);
setTimeout(function() {console.log(`pear`);},1000);
setTimeout(function() {console.log(`melon`);},3000);
setTimeout(function() {console.log(`grapes`);},5000);