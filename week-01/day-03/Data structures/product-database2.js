const product = {
    Eggs:200,
    Milk:200,
    Fish:400,
    Apples:150,
    Bread:50,
    Chicken:550
};

Object.keys(product).forEach(function(key) {
    if (product[key] < 201) {
        console.log(key);
    }   
}) //Which products cost less than 201? (just the name)

Object.keys(product).forEach(function(key) {
    if (product[key] > 150) {
        console.log(key +  `: ` + product[key]);
    }   
}) //Which products cost more than 150?