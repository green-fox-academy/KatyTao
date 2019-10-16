'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

const girls = ["Eve","Ashley","Claire","Kat","Jane"];
const boys = ["Joe","Fred","Tom","Todd","Neef","Jeff"];
function makingMatches(arr1,arr2) {
    let newList = [];
    let maxLength = (arr1.length>arr2.length)?arr1.length:arr2.length;
    for (let i = 0; i < maxLength; i++) {
        if((arr1[i]!==undefined)&&(arr2[i]!==undefined)){
            newList.push(arr1[i]);
            newList.push(arr2[i]);
        }else if (arr1[i]===undefined) {
            newList.push(arr2[i]);
        }else {
            newList.push(arr1[i]);
        }
    }

    return newList;
}
console.log(makingMatches(girls, boys));

module.exports = makingMatches;