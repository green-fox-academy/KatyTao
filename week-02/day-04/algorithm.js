// two complements, arithmetic/logical shift

0b1111
console.log(parseInt(~0b1111,16).toString(2));
console.log((672).toString(2));

0000 // the first 0 stands for +/-

// big O, describe the time and space complexity 
// unique, a quicker solution?

// input: [1, 1, 2, 2, 2, 3, 4, 4, 5]
// output: [1, 2, 3, 4, 5]

function unique(input) {

}

function uniqueSlow(input) {
  const output = [];
  for(let i = 0; i< input.length; i++) {
    if(findIndex(output, input[i] === -1)) {
      output.push(input[i]);
    }
  }
  return output;
}

function randomStr(length) {
  Array(length).fill(Math.random().toString(36).substr(7));
  // get a random string and get last 6 (start to slice from the 7th)
}

//set to remove duplicates
const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

let unique = [...new Set(names)];
console.log(unique); // 'John', 'Paul', 'George', 'Ringo'
