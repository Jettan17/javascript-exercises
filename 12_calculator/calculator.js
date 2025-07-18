const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	if (arr.length == 0) {
    return 0
  }
  return arr.reduce((total, num) => total+num);
};

const multiply = function(arr) {
  return arr.reduce((total, num) => total*num);
};

const power = function(num, exponent) {
  return num ** exponent;
};

const factorial = function(num) {
	if (num == 1 || num == 0) {
    return 1;
  }
  return num * factorial(num-1);
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
