const priceList = {
    Milk:1.07,
    Rice:1.59,
    Eggs:3.14,
    Cheese:12.60,
    ChickenBreasts:9.40,
    Apples:2.31,
    Tomato:2.58,
    Potato:1.75,
    Onion:1.10,
};
const BobList = {
    Milk:3,
    Rice:2,
    Eggs:2,
    Cheese:1,
    ChickenBreasts:4,
    Apples:1,
    Tomato:2,
    Potato:1,
};
const AliceList = {
    Rice:1,
    Eggs:5,
    ChickenBreasts:2,
    Apples:1,
    Tomato:10,
};

let BobTotal = 0;
Object.keys(BobList).forEach(function(key) {
    Object.keys(priceList).forEach(function(key2){
        if (key === key2) {
            BobTotal += BobList[key] * priceList [key2];
        }
    })
})
console.log(BobTotal); //How much does Bob pay?

let AliceTotal = 0;
Object.keys(AliceList).forEach(function(key) {
    Object.keys(priceList).forEach(function(key2){
        if (key === key2) {
            AliceTotal += AliceList[key] * priceList [key2];
        }
    })
})
console.log(AliceTotal); //How much does Alice pay?

if (AliceList.Rice > BobList.Rice) {
    console.log("Alice");
} else {
    console.log("Bob");
} //Who buys more Rice?

if (AliceList.Potato > BobList.Potato) {
    console.log("Alice");
} else {
    console.log("Bob");
} //Who buys more Potato?

console.log(Object.keys(BobList).length);

if (Object.keys(BobList).length > Object.keys(AliceList).length) {
    console.log("Bob");
} else {
    console.log("Alice");
} //Who buys more different products?

let BobPiece = 0, AlicePiece = 0;
Object.keys(BobList).forEach(function(key) {
    BobPiece += BobList[key];
})
Object.keys(AliceList).forEach(function(key) {
    AlicePiece += AliceList[key];
})

if (BobPiece > AlicePiece) {
    console.log("Bob");
} else {
    console.log("Alice");
} //Who buys more products?
