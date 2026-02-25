/**
 * Kata: Even or Odd Checker
 * Level: Basic Logic
 * Platform: Personal Training
 *
 * Description:
 * Uses the modulo operator to determine if a single number is
 * even (divisible by 2) or odd.
 */

function evenOrOdd(number) {
  return number % 2 === 0 ? `${number} is even` : `${number} is odd`;
}

const checkNumber = evenOrOdd(8);
console.log(checkNumber);
