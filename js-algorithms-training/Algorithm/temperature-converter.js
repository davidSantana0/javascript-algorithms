/**
 * Kata: Temperature Converter
 * Level: Basic / Math
 * Platform: Personal Training
 *
 * Description:
 * Set of functions to convert temperatures between Celsius
 * and Fahrenheit scales.
 */

const celsiusToFahrenheit = (c) => `${((c * 9) / 5 + 32).toFixed(2)}°F`;

const fahrenheitToCelsius = (f) => `${(((f - 32) * 5) / 9).toFixed(2)}°C`;

console.log(celsiusToFahrenheit(25));
console.log(fahrenheitToCelsius(75));
