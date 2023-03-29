'use strict'
const submitBtn = document.querySelector('.requestForm__submitBtn');
const txtArea = document.querySelector('.requestForm__txt');

submitBtn.addEventListener('click', () => {
    const options = {method: 'GET'};
fetch(`https://jsonplaceholder.typicode.com/${txtArea.value}`)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
})