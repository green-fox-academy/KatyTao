// 1) replace the list items' content with items from this list:
// ['apple', 'banana', 'cat', 'dog']

const oldList = document.getElementsByTagName('li');
const newList = ['apple', 'banana', 'cat', 'dog'];
for (let i = 0 ; i < oldList.length; i++) {
  oldList[i].textContent = newList[i];
}
console.log(oldList);

// 2) change the <ul> element's background color to 'limegreen'
//         - use css class to change the color instead of the style property
document.querySelector('ul').className = `limegreen`;

document.querySelector('.limegreen').style.backgroundColor = 'limegreen';
