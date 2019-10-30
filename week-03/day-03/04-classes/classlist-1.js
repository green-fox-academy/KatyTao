// If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
const pList = document.querySelectorAll(`p`);
if(pList[3].classList.contains('dolphin')) {
  pList[0].textContent = 'pear';  
}

// If the first p has an 'apple' class, replace cat's content with 'dog'
if(pList[0].classList.contains('apple')) {
  pList[2].textContent = 'dog';
}

// Make apple red by adding a .red class
pList[0].className += " red";

//Make balloon less balloon-like (change its shape)
document.getElementsByClassName("balloon")[0].style.borderRadius = "0%";