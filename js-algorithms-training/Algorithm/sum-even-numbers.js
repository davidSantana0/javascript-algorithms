/**
 * Kata: Sum of Even Numbers
 * Level: Basic Logic
 * Platform: Personal Training
 *
 * Description:
 * This function iterates through an array of integers and calculates the
 * total sum of all even numbers found in the collection.
 * It uses the modulo operator (%) to identify numbers divisible by 2.
 */

function sumEvenNumbers() {
  const numbers = [2, 3, 51, 6, 7, 2, 12, 2];
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }

  console.log(`Total sum of even numbers: ${sum}`);
  return sum;
}

sumEvenNumbers();
