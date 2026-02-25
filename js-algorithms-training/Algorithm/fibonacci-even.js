/**
 * Kata: Even Fibonacci Sequence
 * Level: Intermediate Logic
 * Platform: Personal Training
 *
 * Description:
 * Generates the first N numbers of the Fibonacci sequence and
 * filters them to return only the even values.
 */

function generateFibonacci(totalNumbers) {
  if (!Number.isInteger(totalNumbers) || totalNumbers <= 0) {
    return "Please enter a positive integer.";
  }

  let first = 0;
  let second = 1;
  let sequence = [];

  for (let i = 0; i < totalNumbers; i++) {
    sequence.push(first);
    let nextNumber = first + second;
    first = second;
    second = nextNumber;
  }
  return sequence;
}

function getEvenFibonacciNumbers(sequence) {
  return sequence.filter((num) => num % 2 === 0);
}

const evenFib = getEvenFibonacciNumbers(generateFibonacci(15));
console.log(evenFib);
