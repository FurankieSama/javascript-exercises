const convertToCelsius = (valueinFahrenheit) =>  Number(((valueinFahrenheit - 32) * (5/9)).toFixed(1))


const convertToFahrenheit = (valueInCelsius) =>  Number(((valueInCelsius * 1.8) + 32).toFixed(1));


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
 