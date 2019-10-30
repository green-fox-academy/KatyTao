//Add an item that says 'The Green Fox' to the asteroid list.
const asteroidsList = document.querySelector("ul.asteroids");
const newAsteroid = document.createElement('li');
newAsteroid.textContent = 'The Green Fox';
asteroidsList.appendChild(newAsteroid);

//Add an item that says 'The Lamplighter' to the asteroid list.
const lampLighter = document.createElement('li');
lampLighter.textContent = 'The Lamplighter';
asteroidsList.appendChild(lampLighter);

//Add a heading saying 'I can add elements to the DOM!' to the .container.
const headText = 'I can add elements to the DOM!';
document.querySelector(".container").insertAdjacentHTML('afterbegin', headText);

//Add an image, any image, to the container.
const newImageHTML = document.createElement('img').
newImageHTML.src = 'https://www.dejohnpetservices.com/wp-content/uploads/cats-animals-kittens-background.jpg';

document.querySelector(".container").appendChild(newImageHTML);



