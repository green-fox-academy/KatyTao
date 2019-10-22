`use strict`

function highestWordCount(str) {
  str = str.split(/[, ]/);  
  let myObj = {};
  for(let i = 0; i<str.length; i++) {
    myObj[str[i]] = str[i].length;
  }
  console.log(`The largest word count for the text is ${objCount(myObj)}`);
}

function objCount(obj) {
  let max = 0;
  for (let val of Object.values(obj)) {
    if(val > max) {
      max = val;
    }
  }
  return max;
}

const str = `Hello World, this is Katy`;
highestWordCount(str);