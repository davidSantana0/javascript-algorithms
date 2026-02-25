/**
 * Kata: Sum Array Values
 * Level: Basic / Reduce
 * Platform: Personal Training
 *
 * Description:
 * Uses the .reduce() method to accumulate the sum of all
 * numbers within an array.
 */

const numbers = [2, 5, 20, 10, 1, 4, 6];

const totalSum = numbers.reduce(
  (accumulator, current) => accumulator + current,
  0
);
console.log(totalSum);
