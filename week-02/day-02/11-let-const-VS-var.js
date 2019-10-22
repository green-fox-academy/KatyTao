`use strict`
function arrAverage(arr) {
  const len = arr.length;
  let total = 0;
  arr.forEach(num => {
    total+=num;
  });
  return total/len;
}

console.log(arrAverage([1,2,3,4,5]));

