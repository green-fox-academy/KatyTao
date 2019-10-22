`use strict`
//before ES6
function coffee(sugar, milk) {
  sugar = sugar || false;
  milk = milk || false;
  if(sugar) {
    return `coffee with sugar`;
  }
  if(milk) {
    return `coffee with milk`;
  }
  if(sugar&&milk) {
    return `coffee with sugar and with milk`;
  }
  return `coffee`;
}

//from ES6
function coffee(sugar = false, milk = false) {
  if(sugar) {
    return `coffee with sugar`;
  }
  if(milk) {
    return `coffee with milk`;
  }
  if(sugar&&milk) {
    return `coffee with sugar and with milk`;
  }
  return `coffee`;
}

