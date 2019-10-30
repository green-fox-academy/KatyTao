// Write the image's url to the console.

console.log(document.querySelector('img').src);

// Replace the image with a picture of your favorite animal.

document.querySelector("img").src = "https://alaynakbaker.files.wordpress.com/2016/12/golden.jpg";
//document.querySelector("img").setAttribute("src", "https://alaynakbaker.files.wordpress.com/2016/12/golden.jpg");
// Make the link point to the Green Fox Academy website.

document.querySelector("a").href = "https://www.greenfoxacademy.com/";

// Disable the second button.

document.querySelectorAll("button")[1].disabled = true;

// Replace its text with 'Don't click me!'.

document.querySelectorAll("button")[1].textContent = "Don't click me!";