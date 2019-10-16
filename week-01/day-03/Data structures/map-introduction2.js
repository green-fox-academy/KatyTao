const myMap2 = new Map();
myMap2.set(`978-1-60309-452-8`, `A Letter to Jo`);
myMap2.set(`978-1-60309-459-7`, `Lupus`);
myMap2.set(`978-1-60309-444-3`, `Red Panda and Moon Bear`);
myMap2.set(`978-1-60309-461-0`, `The Lab`);

for(let [key, value] of myMap2) {
    resultString = value + ` (ISBN: ` + key + `)`;
    console.log(resultString);
}

//A Letter to Jo (ISBN: 978-1-60309-452-8)
//Lupus (ISBN: 978-1-60309-459-7)
//Red Panda and Moon Bear (ISBN: 978-1-60309-444-3)
//The Lab (ISBN: 978-1-60309-461-0)

myMap2.delete(`978-1-60309-444-3`);
console.log(myMap2);

for(let [key, value] of myMap2) {
    console.log(value);
    if(value === `The Lab`) {
        myMap2.delete(key);
    }
}//Remove the key-value pair with value The Lab

myMap2.set(`978-1-60309-450-4`, `They Called Us Enemy`);
myMap2.set(`978-1-60309-453-5`, `Why Did We Trust Him?`);

console.log(myMap2.has(`478-0-61159-424-8`)); //Print whether there is an associated value with key 478-0-61159-424-8 or not

console.log(myMap2.get(`978-1-60309-453-5`)); //Print the value associated with key 978-1-60309-453-5

