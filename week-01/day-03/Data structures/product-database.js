const product = {
  Eggs: 200,
  Milk: 200,
  Fish: 400,
  Apples: 150,
  Bread: 50,
  Chicken: 550
};

console.log(product.Fish);
let expense = 0;
let exProduct = "";
for (let item in product) {
  if (product[item] > expense) {
    expense = product[item];
    exProduct = item;
  }
}
console.log(exProduct); //What is the most expensive product?

let sum = 0,
  size = 0;
Object.keys(product).forEach(function(key) {
  sum += product[key];
  size++;
});
console.log(sum / size); //What is the average price?

let count = 0;
Object.keys(product).forEach(function(key) {
  if (product[key] < 300) {
    count++;
  }
});
console.log(count); //How many products' price is below 300?

Object.keys(product).forEach(function(key) {
  if (product[key] === 125) {
    console.log(true);
  } else {
    console.log(false);
  }
}); //Is there anything we can buy for exactly 125?

let cheapest = product[Object.keys(product)[0]];
let chProduct = "";
for (let item in product) {
  if (product[item] < cheapest) {
    cheapest = product[item];
    chProduct = item;
  }
}
console.log(chProduct);
