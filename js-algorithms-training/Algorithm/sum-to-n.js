/**
 * Kata: Sum of numbers from 1 to N
 * Level: Basic Logic
 * Platform: Personal Training
 *
 * Description:
 * Given a number N, calculate the total sum of all integers starting from 1 up to N.
 * The program prompts the user for a number and prints the progressive sum to the console.
 */

const prompt = require("prompt-sync")({ sigint: true });

function sumUpToN() {
  let limit = Number(
    prompt("Enter a number to find the sum of all integers up to it: ")
  );
  let totalSum = 0;

  for (let i = 0; i < limit; i++) {
    totalSum = totalSum + i + 1;
    console.log(totalSum);
  }

  return totalSum;
}

sumUpToN();
