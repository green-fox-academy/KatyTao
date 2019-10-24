`use strict`

function bubbleSort(items:number[]) {
  let isSorted = false;
  while(!isSorted) {
    isSorted = true;
    for(let i = 0; i <items.length; i++) {
      if(items[i+1] < items[i]) {
        [items[i], items[i+1]] = [items[i+1], items[i]];
        isSorted = false;
      }
    }
  }
  return items;
}

let arr = [3,4,5,2,1,5,3];
console.log(bubbleSort(arr));
