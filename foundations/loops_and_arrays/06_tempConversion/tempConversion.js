function round(x) {
  return Math.round(x * 10) / 10;
}

const convertToCelsius = function(fahrenheit) {
  const CONVERSION_FACTOR = 5 / 9;
  return round((fahrenheit - 32) * CONVERSION_FACTOR);
};

const convertToFahrenheit = function(celsius) {
  const CONVERSION_FACTOR = 9 / 5;
  return round((celsius * CONVERSION_FACTOR) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
