// ES6 solution
const setEntity = new Set();

setEntity
  .add(1)
  .add(2)
  .add(1);

for (let item of setEntity) {
  console.log(item);
}