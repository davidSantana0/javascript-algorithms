/**
 * Kata: Factorial Calculator
 * Level: Basic Logic / Math
 * Platform: Personal Training
 *
 * Description:
 * Calculates the factorial of a given number provided by the user
 * through the terminal input.
 */

const prompt = require("prompt-sync")({ sigint: true });

function calculateFactorial() {
  let num1 = Number(prompt("Enter the number to see its factorial: "));
  let factorial = 1;

  for (let i = num1; i > 0; i--) {
    factorial = factorial * i;
    console.log(factorial);
  }

  return factorial;
}

calculateFactorial();
