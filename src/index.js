import validator from './validator.js';

document.getElementById('validate').addEventListener('click', function () {
    const cardNumber = document.getElementById('value').value;
    console.log(cardNumber)
    validator.isValid(cardNumber);
})
console.log(validator);
