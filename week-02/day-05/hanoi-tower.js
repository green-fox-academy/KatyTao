//read and store content in the file
const filename = process.argv[2];
const fs = require(`fs`);
let str = fs.readFileSync(filename);
let arr = str.toString().split(`\r\n`);
const pillar = arr.splice(-1);
let disk = arr.map(Number);

let num = 0;
function runHanoi(n, A, B, C) {
  if (n === 1) {
    console.log(`${n} ${A} -> ${C}`);
    ++num;
    return;
  }
  runHanoi(n - 1, A, C, B);
  ++num;
  console.log(`${n} ${A} -> ${C}`);
  runHanoi(n - 1, B, A, C);
}
let n = disk[disk.length - 1];
runHanoi(n, `A`, `B`, `C`);
