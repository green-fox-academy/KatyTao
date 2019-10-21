const myMap = new Map();
myMap.set(97, `a`);
myMap.set(98, `b`);
myMap.set(99, `c`);
myMap.set(65, `A`);
myMap.set(66, `B`);
myMap.set(67, `C`);

for (let key of myMap.keys()) {
  console.log(key); //Print all the keys
}

for (let value of myMap.values()) {
  console.log(value); //Print all the values
}

myMap.set(68, `D`); //Add value D with the key 68

console.log(myMap.size); //Print how many key-value pairs are in the map

console.log(myMap.get(99)); //Print the value that is associated with key 99

myMap.delete(97); //Remove the key-value pair where with key 97

console.log(myMap.has(100)); //Print whether there is an associated value with key 100 or not

myMap.clear(); //Remove all the key-value pairs
