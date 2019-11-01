const submitBtn = document.querySelector("input[type='submit']");
submitBtn.addEventListener('click', function() {
  const name = document.querySelector(".hero-name").value;
  const URL = `https://swapi.co/api/people/?search=${name}`;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', URL, true);
  xhr.onload = () => {
    let result = JSON.parse(xhr.responseText).results;
    console.log(result);
  } 
  xhr.send();
})


