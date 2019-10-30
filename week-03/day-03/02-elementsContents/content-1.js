//2)  Do the same again, but you should keep the cat strong.
//comment the first one will remain the cat strong
const pElement2 = document.querySelectorAll(`p`);
console.log(pElement2);
console.log(pElement2[pElement2.length-1].innerHTML);
for(let i = 0; i < pElement2.length; i++) {
  pElement2[i].innerHTML += ' '+pElement2[pElement2.length-1].innerHTML;
  console.log(pElement2[i]);
}

// 1)  Fill every paragraph with the last one's content.
const pElement = document.querySelectorAll(`p`);
console.log(pElement);
console.log(pElement[pElement.length-1].textContent);
for(let i = 0; i < pElement.length; i++) {
  pElement[i].textContent += ' ' + pElement[pElement.length-1].textContent;
  console.log(pElement[i]);
}

