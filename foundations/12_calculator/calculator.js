const add = function(firstNum, secondNum) {
	return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {
	return firstNum - secondNum;
};

const sum = function(array) {
	const sumOfAllNum = array.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);

  return sumOfAllNum;
};

const multiply = function(array) {
  const productOfAllNum = array.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);

  return productOfAllNum;
};

const power = function(firstNum, secondNum) {
	return firstNum ** secondNum;
};

const factorial = function(num) {
	let product = 1;

  for (let i = num; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
