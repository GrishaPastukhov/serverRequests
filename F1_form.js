'use strict'
const submitBtn = document.querySelector('.requestForm__submitBtn');
const txtArea = document.querySelector('.requestForm__txt');
const displayWindow = document.querySelector('.displayWindow');
const disabledOff = () => {
  submitBtn.removeAttribute('disabled')
}
submitBtn.addEventListener('click', () => {
  const options = { method: 'GET' };
  submitBtn.setAttribute('disabled', '');
  fetch(`https://jsonplaceholder.typicode.com/${txtArea.value}`)
    .then(response => response.json())
    .then(response => JSON.stringify(response))
    .then(response => response.replace(/["']/g, ''))
    .then(response => displayWindow.innerHTML = `Result: ${response.slice(1, -1)}`)
    .then(response => console.log(response))
    .catch(err => alert('Wrong address!'));
  setTimeout(disabledOff, 500);
})
