const validator = {
  isValid: function(cardNumber) {
    const numbers = Array.from(cardNumber)
    let sum = 0;

    // Step 1: doubling digits in odd positions
    for(let i = 0; i < numbers.length; i++) {
      if (i % 2 === 0) {
        numbers[i] = Number(numbers[i]) * 2
      } else {
        numbers[i] = Number(numbers[i])
      }
    }


    // Step 2: Sum digits of numbers greater than 9
    for(let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 9) {
        numbers[i] = 1 + numbers[i] % 10
      }
    }

    // Step 4: sum all digits
    for(let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }

    if(sum % 10 === 0) {
      return true
    } else {
      return false
    }
  }
};

export default validator;
