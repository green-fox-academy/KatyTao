`use strict`
bmiObj = {
  mass:50,
  height:1.6,
}

function BMICalculate(bmiObj) {
  const newObj = {};
  newObj[`mass`] = bmiObj.mass;
  newObj[`height`] = bmiObj.height;
  newObj[`BMI`] = bmiObj.mass/(bmiObj.height*bmiObj.height);
  return newObj;
}

console.log(BMICalculate(bmiObj));
