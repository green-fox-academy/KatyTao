`use strict`

function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) { return false; }
  if (a + b <= c) { return false; }
  if (a + c <= b) { return false; }
  if (b + c <= a) { return false; }
  return true;
}
var possibleTriangles = [
    [1, 1, 1],
    [3, 4, 5],
    [1, 2, 3],
    [5, 12, 13],
    [-1, -1, -1],
];

//before ES6
var triangles = [];
for (var i = 0; i < possibleTriangles.length; i++) {
  if(isTriangle.apply(null,possibleTriangles[i])) {
    triangles[i] = 1;
  } else {
    triangles[i] = 0;
  }
}
console.log(triangles);

//from ES6
let trianglesES6 = [];
possibleTriangles.forEach(arr => {
  if(isTriangle(...arr)) {
    trianglesES6.push(1);
  } else {
    trianglesES6.push(0);
  }
});
console.log(trianglesES6);
