const generateRandomNumber = function() {
  const randomSeed = Math.random();
  const number = randomSeed * 1000;
  const roundedNumber = Math.random(number);

  return roundedNumber;
};


const addTwoNumbers = function(num1, num2) {
  const result = num1 + num2;

  return result;
};