/**
 * Kata: Find Min and Max
 * Level: Basic Logic
 * Platform: Personal Training
 *
 * Description:
 * Iterates through an array to identify the smallest and the largest
 * numbers by comparing each element with the current extremes.
 */

const numbers = [3, 7, 1, 9, 4];
let min = numbers[0];
let max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) max = numbers[i];
  if (numbers[i] < min) min = numbers[i];
}

console.log(`Smallest number: ${min}, Largest number: ${max}`);
