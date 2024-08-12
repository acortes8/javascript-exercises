const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5/9); //formula for F to C
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * (9/5) + 32); //formula for C to F
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
