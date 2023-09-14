const convertToCelsius = function(temp) {
  temp = (temp - 32) / 1.8;
  const newTemp = Math.round(temp * 10) / 10;
  return newTemp;
};

const convertToFahrenheit = function(temp) {
  temp = (temp * 1.8 + 32);
  const newTemp = Math.round(temp * 10) / 10;
  return newTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
