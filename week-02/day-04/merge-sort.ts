`use strict`
function mergeSort(items:number[], half = Math.floor(items.length/2)) {
  if(items.length < 2) {
    return items;
  }
  let left = items.splice(0, half);
  return mergeArray(mergeSort(left),mergeSort(items));
}

function mergeArray(leftArr:number[], rightArr:number[], temp:number[] = []) {
  let leftIndex = 0, rightIndex = 0;
  while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
    temp.push(leftArr[leftIndex] < rightArr[rightIndex] ? leftArr[leftIndex++] : rightArr[rightIndex++]);
  }
  return temp.concat(leftArr.slice(leftIndex).concat(rightArr.slice(rightIndex)));
}

let testArray = [4,5,2,7,1,2,6,5,8,6];
let result = mergeSort(testArray);
console.log(result);



