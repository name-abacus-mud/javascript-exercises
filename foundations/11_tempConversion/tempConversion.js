const convertToCelsius = function(fahrenheit) {
  let getCelsius=(fahrenheit-32) * 5/9;
  // formula to convert fahrenheit to celsius
  getCelsius=Math.round(getCelsius*10)/10;
  // rounding the decimal place to one 
  return getCelsius;
};

const convertToFahrenheit = function(celsius) {
  let getFahrenheit=(celsius*9/5+32);
  // formula to convert celsius to fahrenheit
  getFahrenheit=Math.round(getFahrenheit*10)/10;
  // rounding the decimal place to one
  return getFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
