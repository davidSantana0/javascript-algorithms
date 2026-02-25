/**
 * Kata: Sum of Digits
 * Level: Basic / Type Conversion
 * Platform: Personal Training
 *
 * Description:
 * Converts a number to a string to iterate through its digits
 * and returns their mathematical sum.
 */

function sumAllDigits(value) {
  if (!Number.isInteger(value) || value <= 0) return 0;

  return String(value)
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
}

console.log(`The sum of digits for 1234 is: ${sumAllDigits(1234)}`);
