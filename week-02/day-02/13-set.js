function insertArr(arr) {
  var newArr = [];
  for(var i in arr) {    
    if(newArr.indexOf(arr[i]) === -1){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

var arr = [];
arr.push(1);
arr.push(2);
arr.push(1);
console.log(insertArr(arr));

