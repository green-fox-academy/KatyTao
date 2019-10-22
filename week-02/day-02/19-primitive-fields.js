`use strict`

function primitiveFields(myObj) {
  const result = [];
  for (let entry of Object.entries(myObj)) {
    if(typeof entry[1] === undefined || typeof entry[1] === null || typeof entry[1] === `boolean` || typeof entry[1] === `number` || typeof entry[1] === `string`){
      result.push(entry[0]);      
    }
  }
  return result;
}
console.log(primitiveFields({ x: 1, y: true, z: [] }));