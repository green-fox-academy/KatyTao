//read and store content in the file
const filename = process.argv[2];
const fs = require(`fs`);

let str = fs.readFileSync(filename);
let arr = str.toString().split(`\r\n`);
const pillar = arr.splice(-1);
let disk = arr.map(Number);
console.log(disk);
console.log(pillar);

function Hanoi(n, A, B, C) {
  if (n === 1) {

    move(A, B);
    num++;

  } else {
    runHanoi(n - 1, A, C, B);
    move(A, B);
    num++;
    runHanoi(n - 1, C, B, A);
  }
}

function move(A, B) {
  B.push(A.pop().content);
}



class Human{
  constructor(weight, height) {
    this.weight = weight;
    this.height = height;
  }
  run() {
    this.weight--;
  }
  eat() {
    this.weight++;
    this.height++;
  }
}


function humanRun(weight) {
  weight = weight - 1;
  return weight;
}

function humanEat(weight, height) {
  weight = weight + 1;
  height = height + 1;
  return `Weight is ${weight} and 
  height is ${height}`;
}

