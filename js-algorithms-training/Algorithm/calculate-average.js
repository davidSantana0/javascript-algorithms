/**
 * Kata: Average of N Numbers
 * Level: Basic Logic
 * Platform: Personal Training
 *
 * Description:
 * This script calculates the average of N numbers provided by the user.
 * It first asks how many values will be entered, then collects each one,
 * and finally calculates and prints the average rounded to one decimal place.
 */

const prompt = require("prompt-sync")({ sigint: true });

function calculateAverage() {
  let count = Number(prompt("How many grades will you enter?: "));
  let sum = 0;

  for (let i = 0; i < count; i++) {
    let grade = Number(prompt(`Enter grade ${i + 1}: `));
    sum += grade;
  }

  let average = Number(sum / count).toFixed(1);
  console.log(`The average is: ${average}`);

  return average;
}

calculateAverage();
