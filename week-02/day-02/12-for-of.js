`use strict`
//before ES6
function findMin(arr) {
  var min=arr[0];
  for(var idx = 1; idx < arr.length; idx++) {
    if(arr[idx]<min) {
      min = arr[idx];
    }
  }
  console.log(`Minimum number is `+ min);
}

//from ES6
function findMinES6(arr) {
  let min = arr[0];
  for(let item of arr) {
    if (item < min) {
      min = item;
    }
  }
  console.log(`Minimum number is ${min}`);
}

const data = [5,1,2,9,7,3,8];
findMin(data);
findMinES6(data);