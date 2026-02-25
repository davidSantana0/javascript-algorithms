/**
 * Kata: Even Number Counter
 * Level: Basic Logic / Loops
 * Platform: Personal Training
 *
 * Description:
 * Filters through an array and counts how many elements are
 * even numbers.
 */

function countEvenNumbers(numbers) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) count++;
  }

  return `Number of even pairs: ${count}`;
}

const countResult = countEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(countResult);
