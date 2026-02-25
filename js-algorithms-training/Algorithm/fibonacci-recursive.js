/**
 * Kata: Recursive Fibonacci
 * Level: Intermediate / Recursion
 * Platform: Personal Training
 *
 * Description:
 * Generates the Fibonacci sequence using a recursive function
 * to calculate each number by its index.
 */

function getFibonacciSequence(total) {
  if (!Number.isInteger(total) || total < 0) return "Invalid number";

  let sequence = [];
  for (let i = 0; i < total; i++) {
    sequence.push(calculateFibonacci(i));
  }
  return sequence;
}

function calculateFibonacci(index) {
  if (index === 0) return 0;
  if (index === 1) return 1;
  return calculateFibonacci(index - 1) + calculateFibonacci(index - 2);
}

console.log(getFibonacciSequence(10));
