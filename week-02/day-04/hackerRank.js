function sockMerchant(n, ar) {
  ar.sort();
  let count = 0;
  for(let i = 0; i< n; i++) {
    if(ar[i]==ar[i+1]){
      count ++;
      i+=1;
    }
  }
  return count;
}
//test
// let n = 9;
// let ar = [10,20,20,10,10,30,50,10,20];
// console.log(sockMerchant(n,ar));

function countingValleys(n, s) {
  let arr = s.split("");
  let lvl = 0;
  let temp = [];
  for(let item of arr) {
    if(item === `U`) {
      lvl += 1;
      temp.push(lvl);
    }
    if(item === `D`) {
      lvl -= 1;
      temp.push(lvl);
    }
  }
  let count = 0, index = 0, i = 0;
  
  while(temp[i]) {
    if(temp[i]<0) {
      count++;
    }
    index = temp.indexOf(0,index+1);
    i = index+1;
  }
  return count;
}
// test 
// let n = 12, s = `DDUUDDUDUUUD`;
// console.log(countingValleys(n,s));
// let n2 = 8, s2 = `UDDDUDUU`;
// console.log(countingValleys(n2,s2));

function jumpingOnClouds(c) {
  let count = 0;
  for (let i = 0; i < c.length-1; i++) {
    console.log(`i=${i}`);
    if(c[i+2]!==1) {
      i = i + 1;
    }
    count++;
    console.log(`count:${count}`);
    
  }
  return count;
}

// test 
// let c = [0,0,0,1,0,0];
// jumpingOnClouds(c);

// console.log(jumpingOnClouds(c));
// console.log("++++++++++++++++++++++++");

// let c2 = [0,0,1,0,0,1,0];
// jumpingOnClouds(c2);

// console.log(jumpingOnClouds(c2));

function repeatedString(s, n) {
  let arr = s.split("");
  let temp = [];
  for (let i = 0; i < Math.floor(n/arr.length); i++) {
    temp = temp.concat(arr);
  }
  if(n%arr.length) {
    temp = temp.concat(arr.splice(0,n%arr.length))
  }
  let count = 0;
  temp.forEach(item => {
    if(item === `a`) {
      count++;
    }
  });
  return count;
}

// s=`aba`;
// n=10;
// console.log(repeatedString(s,n));
// s2= `a`;
// n2=1000000000000;
// console.log(repeatedString(s2,n2));

function isValid(s) {
  let str = s.split("");
  let obj = {};
  str.forEach(item =>{
    obj[item] += 1;
  })
  for(let i = 0; i<str.length; i++) {
    obj[str[i]]

  }
}

let testS = `aabbccddeefghi`;
console.log(isValid(testS));
